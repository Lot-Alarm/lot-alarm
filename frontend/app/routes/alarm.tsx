import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSearchParams } from "@remix-run/react";

export default function () {
  const [searchParams] = useSearchParams();
  const { location_to, location_from, max_price, email } = Object.fromEntries(
    searchParams.entries()
  );
  return (
    <main>
      <Flex
        direction="column"
        p={8}
        alignItems="center"
        justifyContent="center"
      >
        <Heading p={8}>Twoje alerty:</Heading>
        <Stack>
          <Card>
            <CardHeader>
              <Heading size="md">{`${location_from} - ${location_to}`}</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Do <b>{` ${max_price} `} PLN</b>
              </Text>
              <Text>{email}</Text>
            </CardBody>
            <CardFooter>
              <HStack>
                <Button>Dezaktywuj</Button>
                <Button>Edytuj</Button>
              </HStack>
            </CardFooter>
          </Card>
        </Stack>
      </Flex>
    </main>
  );
}
