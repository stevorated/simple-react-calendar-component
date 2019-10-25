export * from './mocks';

export const findByTestAttr = (component, attr: string) => {
  return component.find(`[data-test="${attr}"]`)
}


export const findByTestAttrElement = (component, attr: string, element = 'div') => {
  return component.find(`${element}[data-test="${attr}"]`)
}

export const findByTestCustom = (component, attr: string , attrValue: string) => {
  return component.find(`[${attr}="${attrValue}"]`)
}