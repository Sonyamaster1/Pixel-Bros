type TSingleCellProps = {
  height: number
}

export function SingleCell({ height }: TSingleCellProps): JSX.Element {
  const style = {
    height: `${height}px`,
  }

  return <div style={style} />
}
