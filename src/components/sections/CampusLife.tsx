import { campusLife } from '../../content';
import { Scene } from '../illustrations/Scenes';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function CampusLife() {
  return (
    <Section
      id="campus-life"
      eyebrow={campusLife.eyebrow}
      title={campusLife.title}
      subtitle={campusLife.subtitle}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {campusLife.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={(i % 4) * 0.07} className="h-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted">
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <Scene id={item.scene} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{item.body}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
