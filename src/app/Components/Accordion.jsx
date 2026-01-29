import React from 'react'


import styles from "../styles/accordion.module.css"
// import '../styles/accordion.css'

export const Accordion = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className={styles.accordionItem}>
            <h2 className="accordion-header">
                <button className={`collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Corporate & Business Law
                </button>
            </h2>
            <div id="flush-collapseOne" className={`collapse ${styles.accordionCollapse}`} data-bs-parent="#accordionFlushExample">
                <div className={styles.accordionBody}>
                    <p>
                    We assist startups, SMEs, and established companies in navigating legal
                    requirements for smooth and compliant business operations. Our services cover
                    day-to-day legal needs, contract drafting, and business structuring, ensuring
                    your company runs with minimized legal risk.
                    </p>

                    <h6>What we handle:</h6>
                    <ul className={styles.servicesOffer}>
                        <li>Business registration and corporate structuring</li>
                        <li>Contract drafting & review</li>
                        <li>Regulatory compliance</li>
                        <li>Business disputes & negotiations</li>
                        <li>Corporate governance guidance</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.accordionItem}>
            <h2 className="accordion-header">
                <button className={`collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Family Law
                </button>
            </h2>
            <div id="flush-collapseTwo" className={`collapse ${styles.accordionCollapse}`} data-bs-parent="#accordionFlushExample">
                <div className={styles.accordionBody}>
                    <p>
                    We guide individuals and families through sensitive legal matters with compassion, confidentiality, and strong representation. Our goal is to protect your rights while helping you reach fair and peaceful resolutions.
                    </p>

                    <h6>What we handle:</h6>
                    <ul className={styles.servicesOffer}>
                        <li>Marriage, annulment, and legal separation</li>
                        <li>Child custody & visitation arrangements</li>
                        <li>Child and spousal support</li>
                        <li>Property settlement & division</li>
                        <li>Domestic violence protection</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.accordionItem}>
            <h2 className="accordion-header">
                <button className={`collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Criminal Defense
                </button>
            </h2>
            <div id="flush-collapseThree" className={`collapse ${styles.accordionCollapse}`} data-bs-parent="#accordionFlushExample">
                <div className={styles.accordionBody}>
                    <p>
                    We provide strategic defense for clients facing criminal accusations, ensuring your rights are protected from investigation to trial. Our team builds solid legal strategies to achieve reduced penalties, case dismissal, or acquittal when possible.
                    </p>

                    <h6>What we handle:</h6>
                    <ul className={styles.servicesOffer}>
                        <li>Defense for minor to major criminal charges</li>
                        <li>Bail applications</li>
                        <li>Arrest & investigation representation</li>
                        <li>Case assessment & evidence review</li>
                        <li>Courtroom representation and appeals</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.accordionItem}>
            <h2 className="accordion-header">
                <button className={`collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Real Estate Law
                </button>
            </h2>
            <div id="flush-collapseFour" className={`collapse ${styles.accordionCollapse}`} data-bs-parent="#accordionFlushExample">
                <div className={styles.accordionBody}>
                    <p>
                    Our firm assists with secure, legally compliant real estate transactions for individuals, investors, and businesses. We ensure your property rights are protected and every document is accurate before you sign.
                    </p>

                    <h6>What we handle:</h6>
                    <ul className={styles.servicesOffer}>
                        <li>Deed and title transfers</li>
                        <li>Drafting & reviewing sale/lease contracts</li>
                        <li>Due diligence and document verification</li>
                        <li>Property dispute resolution</li>
                        <li>Assistance with real estate transactions</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.accordionItem}>
            <h2 className="accordion-header">
                <button className={`collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Intellectual Property Law
                </button>
            </h2>
            <div id="flush-collapseFive" className={`collapse ${styles.accordionCollapse}`} data-bs-parent="#accordionFlushExample">
                <div className={styles.accordionBody}>
                    <p>
                    We help creators, inventors, and businesses protect their brand, content, and innovations. From registration to enforcement, we make sure your intellectual property stays legally protected.
                    </p>

                    <h6>What we handle:</h6>
                    <ul className={styles.servicesOffer}>
                        <li>Trademark, copyright, and patent registration</li>
                        <li>IP verification & documentation</li>
                        <li>Licensing agreements</li>
                        <li>IP dispute resolution & enforcement</li>
                        <li>Brand protection strategies</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
