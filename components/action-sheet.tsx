import React from "react";
import { Button, Actionsheet, useDisclose } from "native-base";

export default function () {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>Option 1</Actionsheet.Item>
          <Actionsheet.Item>Option 2</Actionsheet.Item>
          <Actionsheet.Item>Option 3</Actionsheet.Item>
          <Actionsheet.Item color="red.500">Delete</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}