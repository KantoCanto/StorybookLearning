import Card from './Card';
import { Cable } from 'lucide-react';
import { WholeWord } from 'lucide-react';
import { SpeakerIcon } from 'lucide-react';
import { LineChart } from 'lucide-react';

const cardItems = [
  {
    icon: Cable,
    title: 'Fast Setup',
    content:
      'Get your workspace running quickly with a structure that is easy to understand and extend.',
  },
  {
    icon: WholeWord,
    title: 'Clear Insights',
    content:
      'Surface the information that matters without forcing users to scan through unnecessary noise.',
  },
  {
    icon: SpeakerIcon,
    title: 'Flexible Layouts',
    content:
      'Adapt content blocks across mobile, tablet, and desktop without rebuilding the whole interface.',
  },
  {
    icon: LineChart,
    title: 'Consistent Styling',
    content:
      'Reuse shared typography and color tokens so each section feels connected to the same system.',
  },
];

const CardSection = () => {
  return (
    <section>
      <div className='container py-12'>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {cardItems.map((item) => (
            <Card
              key={item.title}
              icon={
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lightGreen)] text-[var(--darkGreen)]'>
                  <item.icon className='h-6 w-6' />
                </div>
              }
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
