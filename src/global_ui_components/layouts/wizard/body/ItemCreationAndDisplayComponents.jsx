import { FormContainer } from "@/global_ui_components/containers/FormContainer";
import { AddIcon } from "@/global_ui_components/ui/button";
import { ScrollArea, ScrollBar } from "@/global_ui_components/ui/scroll-area";
import { Separator } from "@/global_ui_components/ui/separator";
import { TypographyH2, TypographyH4, TypographyMuted } from "@/global_ui_components/ui/typography";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { WizardBodyContext, WizardFocusAreaContext } from "./Containers";
import FallbackText from "@/global_ui_components/fallbacks/FallbackText";

// displays the list of items created with the form
export const ItemList = ({ heading, renderList, enableSecondaryItems }) => {
	const {
		isDirty,
		getValues,
		isFormValid,
		selectedItemId,
		setSelectedItemId,
		selectedSecondaryItemId,
		setSelectedSecondaryItemId,
	} = useContext(WizardBodyContext);


	const {
		append,
		fieldArrayName,
		fallbackItemName,
		fieldItemDefaultValues,
		requireSidebarFormToAddItems,
	} = useContext(WizardFocusAreaContext);

	const itemListData = getValues(fieldArrayName);

	// TODO: allow updating and deleting steps

	// when creating a new item, or when we want the user to fill in the fields in the sidebar, disable the list interaction
	const shouldDisableListInteraction = requireSidebarFormToAddItems
		? !(isDirty && isFormValid) // without isDirty, the form would be valid on first render
		: !isFormValid;

	// TODO: whenever new item is selected, we clear the selectedSecondaryItemId state

	const addNewItem = () => {
		if (shouldDisableListInteraction) return;

		// TODO: see if we can use the field.id instead of itemId
		fieldItemDefaultValues.itemId = uuidv4();

		// sets the new field as the selected item
		setSelectedItemId((prevItemId) =>
			prevItemId === fieldItemDefaultValues.itemId
				? null
				: fieldItemDefaultValues.itemId
		);
		setSelectedSecondaryItemId(null)
		append(fieldItemDefaultValues);
	};

	const handleItemSelection = (currentItemId) => {
		if (!shouldDisableListInteraction) {
			setSelectedItemId((prevItemId) =>
				prevItemId === currentItemId ? null : currentItemId
			);
			setSelectedSecondaryItemId(null)
		}
	};

	return (
		<div className="min-w-64 max-h-full overflow-hidden flex flex-col pt-5 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
			<div className="flex flex-row justify-between mb-3.5 mx-5">
				<TypographyH2 text={heading} />
				<AddIcon
					onClick={addNewItem}
					disabled={shouldDisableListInteraction}
				/>
			</div>
			<Separator />
			<ScrollArea>
				<div className="max-h-full flex flex-col-1 my-5 ml-4 mr-7 overflow-hidden">{itemListData?.length > 0
					? enableSecondaryItems
						? renderList(
							append, // this is used to append new items - a workaround for avoiding context in the branchList because it leads to an error 
							itemListData,
							selectedItemId,
							handleItemSelection,
							selectedSecondaryItemId,
							setSelectedSecondaryItemId, // TODO: this is needed in the BranchList only... can we provide this without passing this prop for only one use case?
							shouldDisableListInteraction // this disables accordion triggers
						)
						: renderList(
							itemListData,
							selectedItemId,
							handleItemSelection,
							shouldDisableListInteraction // this disables accordion triggers
						)
					: <FallbackText
						comfortable
						text={`Tap the plus icon to add a new ${fallbackItemName ? fallbackItemName : 'item'}`}
					/>}</div>
			</ScrollArea>
		</div>
	);
};

// previews the item created in the form
export const ItemPreview = ({ heading, renderPage, renderPageProp, otherProps }) => {
	const { selectedItemId } = useContext(WizardBodyContext)

	return (
		<div className="min-w-96 overflow-y-scroll flex flex-col pt-3 bg-[var(--card)] rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md">
			<div className="mb-3.5 mx-5">
				<TypographyH4 text={`Preview: ${heading}`} />
			</div>
			<Separator />
			<ScrollArea>
				<div className="max-h-full flex flex-col-1 mt-5 mx-7 overflow-hidden">
					{renderPage({ [renderPageProp]: { id: selectedItemId }, ...otherProps })}
					<ScrollBar />
				</div>
			</ScrollArea>
		</div>
	);
};

// displays the fields that define the item
export const ItemDetails = ({ heading, renderDetailFields, renderSecondaryDetailFields, shouldDismissFieldArray = false }) => {
	const { selectedStepId, selectedItemId, selectedSecondaryItemId } = useContext(WizardBodyContext);
	const { fields, fieldArrayName, fallbackItemName } = useContext(WizardFocusAreaContext);

	if (!shouldDismissFieldArray) return (<div className="flex flex-col min-w-72 h-full relative overflow-hidden gap-4 p-5 pr-0 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md">
		{heading && <TypographyMuted text={heading} />}

		<ScrollArea>
			<FormContainer scroll>
				{renderDetailFields(selectedItemId)}
			</FormContainer>
		</ScrollArea>
	</div>)

	return (
		<div className="flex flex-col min-w-72 h-full relative overflow-hidden gap-4 p-5 pr-0 bg-[var(--card)] rounded-tr-2xl rounded-br-2xl rounded-tl-md rounded-bl-md">
			{heading && <TypographyMuted text={heading} />}

			{fields?.length > 0 ? (
				selectedItemId ? (
					fields.map((field, index) => {
						const fieldItemNamePrefix = `${fieldArrayName}.${index}`;
						const isSelectedMainInquiry = selectedSecondaryItemId === null && field.itemId === selectedItemId;

						if (isSelectedMainInquiry || field.itemId === selectedSecondaryItemId) {
							return (
								<ScrollArea key={field.id}>
									<FormContainer scroll>
										{isSelectedMainInquiry ? (
											renderDetailFields(fieldItemNamePrefix, selectedStepId)
										) : (
											field.itemId === selectedSecondaryItemId && (
												renderSecondaryDetailFields(fieldItemNamePrefix)
											)
										)}
									</FormContainer>
									<ScrollBar />
								</ScrollArea>
							);
						}
						return null; // Return null for items that are not selected
					})
				) : (
					<FallbackText compact text={`Expand an ${fallbackItemName ? fallbackItemName : 'item'} to modify`} />
				)
			) : (
				<FallbackText text={`Add a new ${fallbackItemName ? fallbackItemName : 'item'} to get started`} />
			)}
		</div>
	);
};