import PatternLibrary from "@/components/PatternLibrary"
import cx from "classnames"
import Head from "next/head"
import styles from "./index.module.scss"

export default function Home() {
  return (
    <div className={cx(styles.wrap, " container")}>
      <Head>
        <title>Lighthouse test</title>
      </Head>
      <span>
        <h2>NextJS Boilerplate by</h2>
        <p>
          {" "}
          <a href='mailto:andrew.pungprakearti@gmail.com'>
            Andrew Pungprakearti
          </a>
        </p>
      </span>
      <PatternLibrary />
    </div>
  )
}
