import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Tentang Saya",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Saya adalah Reza, seorang profesional di bidang Software Engineering
        dengan pengalaman lebih dari 15 tahun dan terus berkembang.
      </>
    ),
  },
  {
    title: "Keahlian Utama",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Dengan spesialisasi di <em>Backend Engineering</em>, saya mengutamakan
        kualitas, efisiensi, dan hasil yang berkelanjutan.
      </>
    ),
  },
  {
    title: "Hubungi Saya",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Tertarik bekerja sama? Jangan ragu untuk menghubungi saya melalui <a href="mailto:reza@nurfachmi.com">email</a>. Saya siap membawa ide Anda menjadi kenyataan.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
