import {
  CommunityIcon,
  MenuIcon,
  SearchIcon,
  StatusIcon,
  NewChatIcon,
} from "../assets/icons";

const iconData = [
  { icon: <CommunityIcon />, label: "Community chat" },
  { icon: <NewChatIcon />, label: "New chat" },
  { icon: <MenuIcon />, label: "Menu" },
  { icon: <SearchIcon />, label: "Search" },
  { icon: <StatusIcon />, label: "Status" },
];

function CustomIconlabel({ label, icon, ...rest }) {
  return (
    <Iconlabel
      fontSize="xs"
      shouldWrapChildren
      label={label}
      bg="#D8C89B"
      color="#232019"
      {...rest}
    >
      <IconButton variant="ghost">(icon)</IconButton>
    </Iconlabel>
  );
}

export function Header(props) {
  return (
    <Flex bg="#88DEAF" justify="space-between" {...props}>
      <Avtar
        boxSize="50px
  "
        name="system-ui"
        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
      />
      <HStack>
        {iconData.map((item, index) => (
          <CustomIconlabel
            key={index}
            label={item.label}
            icon={item.icon}
          ></CustomIconlabel>
        ))}
      </HStack>
    </Flex>
  );
}
