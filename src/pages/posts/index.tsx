import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna asdqooasmd</strong>
            <p>This collection contains no documents. Fauna stores data in "documents". If you’re coming from another database, the documents in a collection are like the rows in a table. This collection contains no documents. Fauna stores data in "documents". If you’re coming from another database, the documents in a collection are like the rows in a table.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna asdqooasmd</strong>
            <p>This collection contains no documents. Fauna stores data in "documents". If you’re coming from another database, the documents in a collection are like the rows in a table. This collection contains no documents. Fauna stores data in "documents". If you’re coming from another database, the documents in a collection are like the rows in a table.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna asdqooasmd</strong>
            <p>This collection contains no documents. Fauna stores data in "documents". If you’re coming from another database, the documents in a collection are like the rows in a table. This collection contains no documents. Fauna stores data in "documents". If you’re coming from another database, the documents in a collection are like the rows in a table.</p>
          </a>
        </div>
      </main>
    </>
  );
}