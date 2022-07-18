import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Heading
} from "@chakra-ui/react";
import { useState } from "react";

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [isOpen, setOpen] = useState(true);
  // const onOpen = () => setOpen(true);
  // const onClose = () => setOpen(false);
  return (
    <>
      {/* <Modal isOpen={isOpen}>
        <ModalOverlay />
      </Modal> */}
      <Button onClick={onOpen}>Open Modal</Button>
      <Text textStyle="subtitle1">{isOpen ? "TRUE" : "FALSE"}</Text>
      <Text textStyle="subtitle2">{isOpen ? "TRUE" : "FALSE"}</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> Hello</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// import {
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   useDisclosure,
//   Button
// } from "@chakra-ui/react";
// import React from "react";

// export default function AlertDialogExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = React.useRef();

//   return (
//     <>
//       <Button colorScheme="red" onClick={onOpen}>
//         Delete Customer
//       </Button>

//       <AlertDialog
//         isOpen={isOpen}
//         leastDestructiveRef={cancelRef}
//         onClose={onClose}
//       >
//         <AlertDialogOverlay>
//           <AlertDialogContent>
//             <AlertDialogHeader fontSize="lg" fontWeight="bold">
//               Delete Customer
//             </AlertDialogHeader>

//             <AlertDialogBody>
//               Are you sure? You can't undo this action afterwards.
//             </AlertDialogBody>

//             <AlertDialogFooter>
//               <Button ref={cancelRef} onClick={onClose}>
//                 Cancel
//               </Button>
//               <Button colorScheme="red" onClick={onClose} ml={3}>
//                 Delete
//               </Button>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>
//     </>
//   );
// }
