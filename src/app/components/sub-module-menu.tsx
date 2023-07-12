import SubModuleMenuItem, { MenuDef } from "./sub-module-menu-item";

type SubModuleMenuProps = {
  menu: MenuDef[];
};

const SubModuleMenu: React.FunctionComponent<SubModuleMenuProps> = (props) => {
  const { menu } = props;

  if (menu && menu.length > 0) {
    return (
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <SubModuleMenuItem menu={item} />
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return null;
};

export default SubModuleMenu;
