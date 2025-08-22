interface TypographyProps {
  variant: "heading" | "paragraph" | "link";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export default function Typography({
  variant,
  children,
  className = "",
  style = {},
  color = "text-black",
  fontSize = "text-base",
  fontWeight = "font-normal",
}: TypographyProps) {
  const baseClasses = `block ${color} ${fontSize} ${fontWeight} ${className}`;

  // Switch is sweet for handling different variants

  switch (variant) {
    case "heading":
      return (
        <h1 className={`${baseClasses} text-2xl`} style={style}>
          {children}
        </h1>
      );
    case "paragraph":
      return (
        <p className={`${baseClasses}`} style={style}>
          {children}
        </p>
      );
    case "link":
      return (
        <a
          href="#"
          className={`${baseClasses} hover:text-emerald-600`}
          style={style}
        >
          {children}
        </a>
      );
    default:
      return null;
  }
}
