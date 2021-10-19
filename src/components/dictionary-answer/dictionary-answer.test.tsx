import { render, screen } from "@testing-library/react";
import DictionaryAnswer from "./dictionary-answer";


describe('dictionary-answer test', () => {
  const answer = {
    word:'test', 
    data:[
      {
        class:'class',
        meanings:['a','b','c'],
        etymology:'etymology'
      },
      {
        class:'class2',
        meanings:['a2','b2','c2'],
        etymology:'etymology'
      },
    ]
  }
  test('renders', () => {
    render(<DictionaryAnswer answer={answer}/>)
    
    const component = screen.getAllByText(/test/i)

    for(let test of component){
      expect(test).toBeInTheDocument()
    }
  });
  test('renders all data info', () => {
    render(<DictionaryAnswer answer={answer}/>)

    const wordClass = screen.getByText('class')
    expect(wordClass.outerHTML).toContain('<h4')

    const wordClass2 = screen.getByText('class2')
    expect(wordClass2.outerHTML).toContain('<h4')

    const meanings = screen.getAllByRole('listitem')
    expect(meanings.length).toBe(6)

  });
});