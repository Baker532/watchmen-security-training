interface PlaceholderFlagProps {
  className?: string
}

export function PlaceholderFlag({ className = '' }: PlaceholderFlagProps) {
  return (
    <span className={className ? `placeholder-flag ${className}` : 'placeholder-flag'}>
      [Placeholder]
    </span>
  )
}
