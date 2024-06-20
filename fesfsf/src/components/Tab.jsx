function Tab({children,buttons,Container='menu'}) {
  return (<>
  <Container>
    {buttons}
  </Container>
  {children}
  </>
  )
}

export default Tab