import { LuThermometerSnowflake } from "react-icons/lu";
import { Box, Button, HStack, Heading, Icon } from "@chakra-ui/react";

export default function Header() {
  return (
    <HStack as="header" py="4" px="6" bg="blue.50" shadow="sm">
      <Heading size="lg">
        <HStack>
          <Icon>
            <LuThermometerSnowflake />
          </Icon>
          Living Ice Sheet Temperature
        </HStack>
      </Heading>
      <Box flex="1" />
      <Button variant={"surface"}>
        <a
          href="https://github.com/ICESEE-project/living-ice-sheet-temperature/tree/1d0cf566534f982bbdecf43efa880928c4dda1eb/docs"
          target="_blank"
        >
          Docs
        </a>
      </Button>
    </HStack>
  );
}
