"use client"

import React, { useState, FormEvent, ChangeEvent } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import NewTwitterLogo from "./NewTwitterlogo";
import { RiYoutubeFill, RiGithubFill, RiTwitterFill, RiLinkedinFill, RiMapPinLine, RiMailLine } from "react-icons/ri";

import classes from "../styles/contact.module.css";

const Contact = () => {
  const [details, setDetails] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!details.email || !details.name || !details.message) {
      return toast({
        variant: "destructive",
        title: "Please fill the fields",
      });
    }

    try {
      setLoading(true);
      const response = await axios("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: details,
      });

      if (response.data.success) {
        setDetails({
          email: "",
          name: "",
          message: "",
        });
        setSubmitted(true);
        toast({
          variant: "success",
          title: "Your mail has been sent! I will reply back soon ✨",
        });
      } else {
        return toast({
          variant: "destructive",
          title: "Sorry, couldn't send the mail",
        });
      }
    } catch (error) {
      console.log(error);
      return toast({
        variant: "destructive",
        title: "Sorry, couldn't send the mail",
      });
    } finally {
      setLoading(false);
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row className="flex justify-between flex-col md:flex-row">
          <Col lg="4" md="6">
            <h3 className="mt-4 mb-4 text-2xl">Connect with me</h3>
            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <RiMapPinLine />
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <a href="mailto:royalsalins.dev@gmail.com">
                    <RiMailLine />
                  </a>
                </span>
                <p>
                  <a  href="mailto:royalsalins.dev@gmail.com">
                  royalsalins.dev@gmail.com
                  </a>
                </p>
              </li>
            </ul>
            <div className={`${classes.social__links}`}>
             
               
              <Link
                
                aria-label="Github Profile"
                href="https://github.com/royaals"
                target="_blank"
              >
                <RiGithubFill />
              </Link>
              <Link
               
                aria-label="Twitter Account"
                href="https://x.com/royalsalins_dev"
                target="_blank"
              >
                <NewTwitterLogo />
              </Link>
              <Link
                
                aria-label="LinkedIn Account"
                href="www.linkedin.com/in/royalsalins"
                target="_blank"
              >
                <RiLinkedinFill />
              </Link>
            </div>
          </Col>
          <Col lg="5" md="6">
            {submitted ? (
              <div className="flex justify-center items-center text-xl font-bold h-[30vh]">
                <p>Message Sent!</p>
              </div>
            ) : (
              <>
                <div className="mt-4 mb-4 text-2xl"><h2>Contact me</h2></div>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <input
                    className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white"
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    autoComplete="off"
                    value={details.name}
                    onChange={onChange}
                  />
                  <input
                    className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    autoComplete="off"
                    value={details.email}
                    onChange={onChange}
                  />
                  <textarea
                    className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white"
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="4"
                    autoComplete="off"
                    value={details.message}
                    onChange={onChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
