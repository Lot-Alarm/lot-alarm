import { Box, Button, Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

export default function Index() {
  return (
    <main>
      <Box p={4}>
        <Heading>Lot Alert</Heading>
        <p>
          Nigdy więcej nie przegapisz okazji na tani lot w wymarzone miejsce.
        </p>
        <Box p={4}>
          <form>
            <FormControl>
              <FormLabel>Cel podróży</FormLabel>
              <Input
                size="lg"
                placeholder="Gdzie chcesz lecieć?"
                type="email"
                isRequired
              />
              <FormHelperText>
                Wybierz miejsce i kliknij przycisk
              </FormHelperText>
            </FormControl>
            <Button mt={4} colorScheme="teal" isLoading={false} type="submit">
              Ustaw alert
            </Button>
          </form>
        </Box>
      </Box>
    </main>
  );
}
