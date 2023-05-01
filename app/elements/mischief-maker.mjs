const mischief = nonexistantString => nonexistantString.split(' ')

export default function MischiefMaker({ html, state }) {
  const { attrs } = state
  const { nope } = attrs

  return html`
    <p>${mischief(nope)}</p> 
  `
}
