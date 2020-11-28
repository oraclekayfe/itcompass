import React from "react"
import styles from "../css/footer.module.css"
import socialLinks from "../constants/socialLinks"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                {socialLinks.map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                copyright &copy; ITCOMPASS.IO {new Date().getFullYear()} all
                rights reserved
            </div>
        </footer>
    )
}

export default Footer
