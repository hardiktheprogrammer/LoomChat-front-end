import { MenuIcon, StatusIcon, NewChatIcon } from "../assets/icons";
import { Flex, Avatar, HStack, IconButton, Tooltip } from "@chakra-ui/react";
const iconData = [
  { icon: <NewChatIcon />, label: "New chat" },
  { icon: <MenuIcon />, label: "Menu" },
  { icon: <StatusIcon />, label: "Status" },
];

function CustomLibTools({ label, icon, ...rest }) {
  return (
    <Tooltip
      fontSize="xs"
      shouldWrapChildren
      label={label}
      bg="#D8C89B"
      color="#232019"
      {...rest}
    >
      <IconButton variant="ghost">{icon}</IconButton>
    </Tooltip>
  );
}

export function Header(props) {
  return (
    <Flex
      py="1"
      px="6"
      bg="#a5a5fa"
      justify="space-between"
      color="#f2f2f2"
      borderRight={"2px solid #232019"}
      {...props}
    >
      <Avatar
        boxSize="40px
  "
        name="sans-serif"
        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
      />
      <HStack>
        {iconData.map((item, index) => (
          <CustomLibTools key={index} label={item.label} icon={item.icon} />
        ))}
      </HStack>
    </Flex>
  );
}
