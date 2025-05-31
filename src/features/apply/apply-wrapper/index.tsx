"use client";
import React from "react";
import styles from "../apply-wrapper/styles.module.scss";
import { ArrowbackIcon, WhatsappIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import { applicationSteps } from "@/components/data";

export default function ApplyWrapper() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/visa-application");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_width}>
          <div onClick={handleClick} className={styles.back}>
            <ArrowbackIcon />
            <p>Apply now</p>
          </div>
          <div className={styles.best}>
            <h3>Best Canada Visa Application From Nigeria</h3>
            <p>
              Planning to visit, study, or work in Canada? Here&apos;s a
              complete guide to the visa requirements, necessary documents, and
              application steps to get you started.
            </p>
          </div>

          <div className={styles.application}>
            {applicationSteps.map((apply) => (
              <div key={apply.id} className={styles.apply_box}>
                <p className={styles.step}>Step {apply.id}</p>
                <h3 className={styles.title}>{apply.name.trim()}</h3>
                <ul>
                  <li className={styles.list}>{apply.list}</li>
                  {apply.listTwo && (
                    <li className={styles.list}>{apply.listTwo}</li>
                  )}
                  {apply.listThree && (
                    <li className={styles.list}>{apply.listThree}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.application_two}>
            {applicationSteps.map((apply) => (
              <div key={apply.id} className={styles.apply_box}>
                <p className={styles.step}>{apply.id}</p>
                <h3 className={styles.title}>{apply.name.trim()}</h3>
                <ul>
                  <li className={styles.list}>{apply.list}</li>
                  {apply.listTwo && (
                    <li className={styles.list}>{apply.listTwo}</li>
                  )}
                  {apply.listThree && (
                    <li className={styles.list}>{apply.listThree}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.applying_canada}>
            <h3>Applying for a Canada Visa? We&apos;ve got You Covered!</h3>
            <p>
              Applying for a canada visa from Nigeria can seems like a complex
              process, but with the right guidance, it&apos;s becomes much
              easier. At
              <span> TBIL Travels,</span> we specialize in providing expert
              assistance to ensure your visa application is seamless and stress
              - free. Whether you are applying for a student visa, visitor visa,
              work permit, or permit residency, our team is here to guide you
              every step of the way.
            </p>

            <p>
              Beyond Canada, we also assist with <span>UK</span> and{" "}
              <span>US</span> visa applications, ensuring you have all the
              necessary documents and support for a successful outcome. Let TBIL
              Travels handle the details while you focus on your travel plans.
            </p>
            <p>
              Ready to start your visa applications? Contact us today and take
              the first step towards your international journey
            </p>
            <p>Click on the link below to begin your application process.</p>
            <div className={styles.btn}>
              <WhatsappIcon className={styles.icon} />
              <div className={styles.contact}>
                <p>
                  Canada Visa <span>Online</span>
                </p>
                <p className={styles.need_help}>Need Help? Chat with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
