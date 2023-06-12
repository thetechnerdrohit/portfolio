import React, { type ReactNode } from "react";

interface Tab {
  name: string;
  icon: ReactNode;
}
interface TabsProps {
  className: string;
  tabs: Tab[];
  setActiveTab: (activeTab: string) => void;
  activeTab: string;
}

const Tabs = ({ className, tabs, setActiveTab, activeTab }: TabsProps) => {
  return (
    <div
      className={`${className} flex flex-col items-center border-b border-primary/50 dark:border-primaryDark/50 cursor-pointer`}
    >
      <ul className="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        {tabs.map((tab: Tab) => (
          <li key={tab.name} className="mr-2">
            <span
              onClick={() => void setActiveTab(tab.name)}
              className={`group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-primary hover:text-primary dark:hover:border-primaryDark dark:hover:text-primaryDark ${
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                activeTab === tab.name &&
                "active border-primary/100 text-primary dark:border-primaryDark dark:text-primaryDark"
              } `}
            >
              {tab.icon}
              <span className="sm:hidden">{tab.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
