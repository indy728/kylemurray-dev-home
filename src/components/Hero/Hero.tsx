import styles from "@/app/page.module.css"

export default function Hero() {
const updated = new Date();

return(
    <header className={styles.hero}>
          <h1>
            Kyle Devlin Murray
          </h1>
          <p>
            Web development leader, portfolio site under construction
          </p>

          <p>Last updated {' '}
            <time dateTime={updated.toISOString()}>
                {updated.toLocaleDateString('en-US', {
                    dateStyle: 'medium',
                    timeZone: 'America/Los_Angeles'
                })}
            </time>
          </p>
    </header>
)
}