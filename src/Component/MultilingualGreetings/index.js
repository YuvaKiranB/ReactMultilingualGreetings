import {Component} from 'react'

import GetButton from '../LanguageButton'

import {
  MainContainer,
  GreetingContainer,
  MainHeading,
  ButtonsContainer,
  ResultContainer,
  Image,
} from './styling'

const languageConstants = {
  english: 'English',
  tamil: 'Tamil',
  telugu: 'Telugu',
}

class MultilingualGreetings extends Component {
  state = {language: languageConstants.english}

  updateLanguage = language => {
    this.setState({language})
  }

  render() {
    const {content} = this.props
    const {language} = this.state
    return (
      <MainContainer>
        <GreetingContainer>
          <MainHeading>Multilingual Greetings</MainHeading>
          <ButtonsContainer>
            {content.map(eachItem => (
              <GetButton
                key={eachItem.id}
                content={eachItem}
                updateLanguage={this.updateLanguage}
                activeLanguage={language}
              />
            ))}
          </ButtonsContainer>

          <ResultContainer>
            {language === 'English' && (
              <Image src={content[0].imageUrl} alt={content[0].imageAltText} />
            )}
            {language === 'Tamil' && (
              <Image src={content[1].imageUrl} alt={content[1].imageAltText} />
            )}
            {language === 'Telugu' && (
              <Image src={content[2].imageUrl} alt={content[2].imageAltText} />
            )}
          </ResultContainer>
        </GreetingContainer>
      </MainContainer>
    )
  }
}

export default MultilingualGreetings
