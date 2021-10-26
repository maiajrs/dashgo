import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton
} from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { SideBarNav } from "./SideBarNav";

export default function SideBar() {
  const isDrawerSideBar = useBreakpointValue({ base: true, lg: false });
  const {isOpen, onClose} = useSidebarDrawer()

  if (isDrawerSideBar) {
    return (
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" width="64" mr="8">
      <SideBarNav />
    </Box>
  );
}
