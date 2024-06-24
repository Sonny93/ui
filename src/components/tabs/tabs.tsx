import { ReactNode, useState } from 'react';
import { IconType } from 'react-icons/lib';
import Transition from '~/components/_transition';
import TabItem from '~/components/tabs/tab_item';
import TabList from '~/components/tabs/tab_list';
import TabPanel from '~/components/tabs/tab_panel';

export interface Tab {
  title: string;
  content: ReactNode;
  icon?: IconType;
  danger?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <TabList>
        {tabs.map(({ title, icon: Icon, danger }, index) => (
          <TabItem
            key={index}
            active={index === activeTabIndex}
            onClick={() => handleTabClick(index)}
            danger={danger ?? false}
          >
            {!!Icon && <Icon size={20} />}
            {title}
          </TabItem>
        ))}
      </TabList>
      <TabPanel key={tabs[activeTabIndex].title}>
        <Transition>{tabs[activeTabIndex].content}</Transition>
      </TabPanel>
    </div>
  );
}
