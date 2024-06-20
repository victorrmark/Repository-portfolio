import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
  import NewRepoForm from './NewRepoForm'


const NewRepoModal = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button onClick={onOpen} colorScheme='blue'>New Repo</Button>
  
        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Repository</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <NewRepoForm onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default NewRepoModal