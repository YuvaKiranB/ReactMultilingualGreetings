import {ButtonContainer, Button} from './styling'

const GetButton = props => {
  const {content, activeLanguage, updateLanguage} = props
  const {buttonText} = content

  const clickedButton = () => {
    updateLanguage(buttonText)
  }

  const isActive = content.buttonText === activeLanguage

  return (
    <ButtonContainer>
      <Button isActive={isActive} onClick={clickedButton} type="button">
        {buttonText}
      </Button>
    </ButtonContainer>
  )
}

export default GetButton
