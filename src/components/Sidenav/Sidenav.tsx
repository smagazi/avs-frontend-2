import React from "react";
import classNames from "classnames";
import { SidenavItemProps, SidenavProps } from "@/types/ui/sidenav";
import ReviewCard from "@/components/ReviewCard";

/**
 * Sidenav component for rendering a sidebar navigation menu.
 *
 * @component
 * @param {SidenavProps} props - Properties to configure the Sidenav component.
 * @param {Array<SidenavItemProps>} props.navItems - List of navigation items to be displayed.
 * @returns {React.ReactElement} The rendered Sidenav component.
 */
const Sidenav: React.FC<SidenavProps> = (props) => {
  const { navItems } = props;

  return (
    <div className="h-full px-6 bg-background border-r border-r-border-primary max-w-[302px]">
      {/* Logo */}
      <a href="/" className="flex py-3 mb-6 border-b border-b-border-primary">
        <img src="/layer_logo.svg" width={260} height={120} alt="LAYER Logo" />
      </a>

      {/* Navigation Items */}
      <ul className="space-y-2 font-medium">
        {navItems &&
          navItems.map((item: SidenavItemProps, index: number) => (
            <li key={index}>
              <a
                href={item.href}
                target={item.target}
                rel={
                  item.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className={classNames(
                  "flex items-center p-2 text-text-primary font-semibold text-base rounded-md cursor-pointer select-none hover:bg-background-interactive-hover",
                  { "!bg-background-interactive-selected": item.active }
                )}
              >
                <span className="material-icons text-text-primary mr-4">
                  {item.icon}
                </span>
                {item.label}
              </a>
            </li>
          ))}
      </ul>

      {/* New Section: In Review */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-text-primary">In Review</h2>
        <div className="mt-2 space-y-2">
          {/* Using ReviewCard component with proposedWinner prop */}
          <ReviewCard title="Will the next presidential election be contested?" description="" proposedWinner="Yes" />
          <ReviewCard title="Will any presidential candidate win all 7 swing states?" description="" proposedWinner="No" />
          <ReviewCard title="Will it rain in NYC on 11/14/2024?" description="" proposedWinner="No" />
          <ReviewCard title="Will Shrithan's Fantasy Football team win the playoffs?" description="" proposedWinner="Yes" />

        </div>
      </div>
    </div>
  );
};

export default Sidenav;
