import { useState } from "react";

// TODO: combine h1-h4 into one component

export function TypographyH1({ text }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>

  );
}

export function TypographyH2({ text }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  )
}

export function TypographyH3({ text }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  )
}

export function TypographyH4({ text }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {text}
    </h4>
  )
}

export function TypographyP({
  text,
  children,
  muted = false,
  small = false,
  underline = false,
  uOffset = '',
  singleLine = false,
  maxWidth = 'lg',
  noWrap = false,
  numLines = 5,
}) {
  const [showFullText, setShowFullText] = useState(false);
  const truncateClasses = `overflow-hidden ${singleLine ? 'line-clamp-1' : `line-clamp-${numLines}`
    } max-w-${maxWidth}`;
  const applyUnderline = underline
    ? uOffset
      ? `underline underline-offset-${uOffset}`
      : `underline underline-offset-8`
    : '';
  const noWrapClass = noWrap ? 'whitespace-nowrap' : '';
  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className={`${showFullText ? '' : `flex flex-row`} justify-start items-baseline`}>
      <p
        className={`leading-7 ${small ? 'text-sm' : ''} ${muted ? 'text-muted-foreground' : 'text-foreground'} ${showFullText ? '' : truncateClasses
          } ${applyUnderline} ${noWrapClass} [&:not(:first-child)]:mt-6`}
      >
        {text}
        {children}
      </p>
      {singleLine
        ? <span
          className={`${small ? 'text-sm min-w-[70px]' : 'min-w-[80px]'} text-muted-foreground hover:text-foreground cursor-pointer`}
          onClick={toggleTextVisibility}
        >
          {showFullText ? 'Show less.' : 'read more.'}
        </span>
        : null}
    </div>
  );
}

// combine large, small and lead into one

export function TypographyLead({ text, truncate = false, maxWidth = 'lg' }) {
  const truncateClasses = truncate ? `overflow-hidden overflow-ellipsis line-clamp-1 max-w-${maxWidth}` : '';
  return (
    <p className={`text-xl text-muted-foreground ${truncateClasses}`}>
      {text}
    </p>
  );
}

export function TypographyLarge({ text, weight = 'semibold', truncate = false, maxWidth = 'lg' }) {
  const truncateClasses = truncate ? `overflow-hidden overflow-ellipsis line-clamp-1 max-w-${maxWidth}` : '';
  return (
    <div className={`text-lg font-${weight} ${truncateClasses}`}>
      {text}
    </div>
  );
}

export function TypographySmall({
  text,
  children,
  weight = 'medium',
  underline = false,
  uOffset = '',
  truncate = false,
  maxWidth = 'lg',
  noWrap = false,
}) {
  const truncateClasses = truncate
    ? `overflow-hidden overflow-ellipsis line-clamp-1 max-w-${maxWidth}`
    : '';
  const applyUnderline = underline
    ? uOffset
      ? `underline underline-offset-${uOffset}`
      : `underline underline-offset-8`
    : '';
  const noWrapClass = noWrap ? 'whitespace-nowrap' : '';

  return (
    <small
      className={`text-sm font-${weight} leading-none ${truncateClasses} ${applyUnderline} ${noWrapClass}`}
    >
      {text} {children}
    </small>
  );
}

export function TypographyMuted({
  text,
  children,
  underline = false,
  uOffset = '',
  truncate = false,
  maxWidth = 'lg',
  noWrap = false,
}) {
  const truncateClasses = truncate
    ? `overflow-hidden overflow-ellipsis line-clamp-1 max-w-${maxWidth}`
    : '';
  const applyUnderline = underline
    ? uOffset
      ? `underline underline-offset-${uOffset}`
      : `underline underline-offset-8`
    : '';
  const noWrapClass = noWrap ? 'whitespace-nowrap' : '';

  return (
    <p
      className={`text-sm text-muted-foreground ${truncateClasses} ${applyUnderline} ${noWrapClass}`}
    >
      {text} {children}
    </p>
  );
}


