/* eslint-disable react/no-unescaped-entities */
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Button, Fieldset, Input, Stack,Box, Text, Card, Textarea }
from "@chakra-ui/react"
import { Field } from "./components/ui/field"
import './ContactMe.css';

function ContactMe() {

    return (
        <article
            className="contact-form-container"
            id="contact-me"
            >
            <div
                className="contact-me"
                >
                <Box
                    maxWidth={'650px'}
                    minHeight={'360px'}
                    className="your-project"
                    >
                    <Box>
                        <Text className="heading">
                            Let's discuss your Project
                        </Text>
                        <Text opacity={'0.5'}>
                            Reach out to me in any of these contact details
                        </Text>
                    </Box>
                    <Box >
                        <Card.Root maxWidth={'330px'} marginTop={'30px'}>
                            <Card.Body className="card-body">
                                <div className="contact-card">
                                    <FaMapMarkerAlt/>
                                </div>
                                <div>
                                    <p style={{opacity:'0.5'}}>Adress:</p>
                                    <p>Johannesburg, Gauteng(RSA)</p>
                                </div>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root maxWidth={'330px'} marginTop={'30px'} >
                            <Card.Body className="card-body">
                                <div className="contact-card">
                                    <FaEnvelope/>
                                </div>
                                <div
                                    style={{ overflow:'hidden' }}
                                    >
                                    <p style={{opacity:'0.5'}}>My Email:</p>
                                    <p>Kgomotsomkhawane@gmail.com</p>
                                </div>
                            </Card.Body>
                        </Card.Root>
                        <Card.Root maxWidth={'330px'} marginTop={'30px'} >
                            <Card.Body className="card-body">
                                <div className="contact-card">
                                    <FaPhoneAlt/>
                                </div>
                                <div>
                                    <p style={{opacity:'0.5'}}>Call me on:</p>
                                    <p>+27 (71) 797 4903</p>
                                </div>
                            </Card.Body>
                        </Card.Root>
                    </Box>
                </Box>
                <Box
                    maxWidth={'650px'}
                    minHeight={'360px'}
                    className="contact-field"
                    >
                    <Fieldset.Root
                        className="card-inputs"
                        >
                        <Stack>
                            <Fieldset.Legend>
                                <Text
                                    className="heading"
                                    >
                                    Your contact info
                                </Text>
                            </Fieldset.Legend>
                            <Fieldset.HelperText opacity={'0.5'}>
                                Please provide your contact details
                            </Fieldset.HelperText>
                        </Stack>

                        <Fieldset.Content>
                            <Field>
                                <Input
                                    className="input-field"
                                    name="name"
                                    placeholder="Name"
                                    required type="text"
                                    maxLength={220}
                                    />
                            </Field>

                            <Field>
                                <Input
                                    className="input-field"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    />
                            </Field>

                            <Field>
                                <Input
                                    className="input-field"
                                    name="location"
                                    placeholder="Location"
                                    type="text"
                                    />
                            </Field>

                            <Field>
                                <Input
                                    className="input-field"
                                    name="subject"
                                    placeholder="Subject"
                                    type="text"
                                    />
                            </Field>

                            <Field>
                                <Textarea
                                    className="input-field"
                                    name="message"
                                    placeholder="message"
                                    required type="text"
                                    />
                            </Field>

                            <Button type="submit">
                                Submit
                            </Button>
                        </Fieldset.Content>
                    </Fieldset.Root>
                </Box>
            </div>
        </article>
    )
}

export default ContactMe;