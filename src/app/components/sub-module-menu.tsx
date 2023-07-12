import SubModuleMenuItem, { MenuDef } from "./sub-module-menu-item";

type SubModuleMenuProps = {
  menu: MenuDef[];
};

const SubModuleMenu: React.FunctionComponent<SubModuleMenuProps> = (props) => {
  const { menu } = props;

  return (
    <li>
      {menu &&
        menu.length > 0 &&
        menu.map((item, index) => {
          return <SubModuleMenuItem key={item.name} menu={item} />;
        })}
    </li>
  );
};

export default SubModuleMenu;
