import React from "react";
import { Grid, Row, Column } from "carbon-components-react";
import { Image } from "@carbon/ibmdotcom-react";

const stylesheet = {

    container: {
        background: "#161616",
        color: "#fff",
        padding: "5rem 0"
    },

    text: {
        marginTop: "1rem",
        textAlign: "justify",
        font: "normal normal normal 16px/20px IBM Plex Sans",
        opacity: "1",
            
        nameTitle: {
            font: "normal normal 600 16px/18px IBM Plex Sans",
            marginTop: "2.5rem"
        },    
        jobTitle: {
            font: "normal normal 300 14px/18px IBM Plex Sans"               
        },     
        cite: {
            font: "italic normal 300 42px/55px IBM Plex Sans",
            margin: ".3rem 0"
        }
    },
    
    titleRow: {
        paddingTop: "1rem",
        borderTop: "1px solid #707070",
    },
    sectionTitle: {
        display: "flex",

        span: {
            font: "normal normal 600 16px/20px IBM Plex Sans",
            marginBottom: "2vh"
        },
    },
    depoimentoColumn: {
        background: "#1F7E48 0% 0% no-repeat padding-box",
        color: "#fff",
        padding: "2%",
    },
}

const HighlightedDepoimento = () => {

    return(
        <>
          <div style={stylesheet.container}>
            <Grid condensed>
              <Row style={stylesheet.titleRow}>
                <Column lg={6}>
                    <div style={stylesheet.sectionTitle}>
                        <p style={stylesheet.sectionTitle.span}>Testimonial</p>
                    </div>
                </Column>
              </Row>

              <Row>
                  <Column lg={8}>
                    <Image
                        defaultSrc={`${process.env.PUBLIC_URL}/img/luna/Group 10662 - 2.png`}
                        alt="HighlightedTestimonial"
                    />
                  </Column>

                  <Column lg={8} style={stylesheet.depoimentoColumn}>
                    <h2 style={stylesheet.text.cite}>
                        ACADEMY TECHNOLOGY ALLIANCE: <br />ESSENTIAL STRATEGY
                    </h2>

                    <p style={stylesheet.text}>We are living the Fourth Industrial Revolution, together with the COVID issue we are experiencing new paradigms and disruptive strategies. The new paths on planet Earth are not easy, there are no clues, but there are allies. </p>
                    <p style={stylesheet.text}> Being able to generate alliances where the creativity of the academy and the university find an echo in institutions with a long way to go in terms of core issues of the Fourth Industrial Revolution, is more than the sum of both parts. </p>
                    <p style={stylesheet.text}> Opportunities that we must assess, promote and of course work in an inter and multidisciplinary way, only in this way will we be able to manage new avenues of knowledge, routes and shortcuts towards the maximum use of analytical tools, in projects for the community, with the maximum of technology, with the reasoning of ethics and well-being that comes with Social Responsibility.</p>
                    <p style={stylesheet.text}> Grateful for belonging to the seed that is the Health squad, for growing together with leaders of diverse visions, thoughts and disciplines. </p>
                    <p style={stylesheet.text.nameTitle}>Dr. Juan Carlos Marroquín </p>
                    <p style={stylesheet.text.jobTitle}> Universidad Anáhuac </p>
                  </Column>
              </Row>
            </Grid>
          </div>
        </>
    )
}

export default HighlightedDepoimento;


