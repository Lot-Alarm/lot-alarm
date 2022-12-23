import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

const API_HOSTNAME = "http://localhost:8000";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const formValues = Object.fromEntries(body.entries()) as Record<
    string,
    string
  >;

  await fetch(`${API_HOSTNAME}/api/alarm/`, {
    method: "post",
    body,
  });

  const urlParams = new URLSearchParams(formValues as Record<string, string>);
  return redirect(`/alarm?${urlParams}`);
}

export default function Index() {
  return (
    <main>
      <Flex
        direction="column"
        p={8}
        alignItems="center"
        justifyContent="center"
      >
        <Flex direction="column">
          <Heading>Lot Alert ✈️</Heading>
          <p>
            Nigdy więcej nie przegapisz okazji na tani lot w wymarzone miejsce.
          </p>
          <Box py={12}>
            <form method="post" action="?index">
              <VStack spacing={6} maxWidth={550} alignItems="flex-start">
                <FormControl>
                  <FormLabel>Lokalizacja</FormLabel>
                  <Input
                    size="lg"
                    placeholder="Skąd chcesz lecieć?"
                    isRequired
                    name="location_from"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Cel podróży</FormLabel>
                  <Input
                    size="lg"
                    placeholder="Gdzie chcesz lecieć?"
                    isRequired
                    name="location_to"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Maksymalna cena biletu (PLN)</FormLabel>
                  <Input
                    size="lg"
                    placeholder="Ile wynosi twój budżet?"
                    isRequired
                    name="max_price"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Twój adres email</FormLabel>
                  <Input
                    size="lg"
                    placeholder="ewa@mail.pl"
                    isRequired
                    name="email"
                  />
                  <FormHelperText>
                    Tu wyślemy alert cenowy. Zero spamu. Nikomu nie udostępniamy
                    twoich danych.
                  </FormHelperText>
                </FormControl>

                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={false}
                  type="submit"
                >
                  Ustaw alert
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Flex>
    </main>
  );
}
