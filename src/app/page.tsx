import Image from 'next/image'
import Menu from "@/app/menu";
import Grid from "@/app/grid";
import {inspect} from "util";
import styles from './CheckoutButton.module.css';
import {CheckoutButton} from "@/app/checkout_button";
import Page from "@/app/checkout/page";

export default function Home() {

    return (
      <div className={styles.container}>
        <Menu/>
          <div className={styles.buttonContainer}>
              <CheckoutButton />
          </div>
          {/*<Page/>*/}
      </div>
  )
}
