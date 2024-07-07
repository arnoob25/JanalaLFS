import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/global_ui_components/ui/breadcrumb";
import { CloseIcon } from "@/global_ui_components/ui/button";
import { TypographyLarge, TypographyMuted, TypographySmall } from "@/global_ui_components/ui/typography";
import { Fragment } from "react";

export const WizardHeader = ({ title, steps, page, onClose }) => {
    return (
        <div className="grid grid-cols-3 content-center items-baseline">
            <div className="md:mr-auto">
                <TypographyLarge text={title} weight="normal" truncate maxWidth="sm" />
            </div>
            <div className="mx-5 md:mx-auto h-fit">
                <Breadcrumb>
                    <BreadcrumbList noWrap>
                        {steps.map((step, index) => {
                            return (
                                <Fragment key={index}>
                                    <BreadcrumbItem className='min-h-[40px] px-2'>  
                                        {step.route === page ? (
                                            <BreadcrumbPage href={step.route}>
                                                <p className="text-sm font-semibold text-nowrap underline underline-offset-8">{step.label}</p>
                                            </BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={step.route}>
                                                <p className="text-sm text-nowrap truncate max-w-[120px]">{step.label}</p>
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {index < steps.length - 1 && <BreadcrumbSeparator />}
                                </Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="ml-auto">
                <CloseIcon onClose={onClose} />
            </div>
        </div>
    );
};