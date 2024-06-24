import { IoLanguageOutline } from 'react-icons/io5';
import Tabs, { Tab } from '~/components/tabs/tabs';

export default function ExampleTabs() {
  const tabs: Tab[] = [
    {
      title: 'Tab 1',
      content: 'My super tab 1',
      icon: IoLanguageOutline,
    },
    {
      title: 'Tab with html content',
      content: <p>yes paragraph</p>,
    },
    {
      title: 'Tab 3',
      content: <p>yes</p>,
    },
    {
      title: 'Tab 4',
      content: <p>no</p>,
    },
    {
      title: 'Tab 5',
      content: <p>yesno</p>,
    },
  ];

  return (
    <div
      style={{
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Tabs tabs={tabs} />
    </div>
  );
}
