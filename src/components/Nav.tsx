import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { useThemeStoreActions } from "@/lib/store/useThemeStore";

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  const { setThemeValue } = useThemeStoreActions();

  function handleCheckedSwitch(checked: boolean) {
    if (checked) {
      setThemeValue("dark");
    } else {
      setThemeValue(undefined);
    }
    setIsDark(checked);
  }

  return (
    <header className="w-full py-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <div className="w-full flex px-8 justify-end">
              <Switch
                checked={isDark}
                onCheckedChange={handleCheckedSwitch}
                className="bg-primary"
              />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
}
