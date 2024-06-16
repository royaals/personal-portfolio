"use client"

import { FormEvent, useState, ChangeEvent } from "react"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"


import classes from "../styles/form.module.css";
import { MagnifyingGlass } from "react-loader-spinner";

const Form = () => {
    const [details, setDetails] = useState({
        email: "",
        name: "",
        desc: "",
      })
      const [loading, setLoading] = useState(false)
    
      const { toast } = useToast()
    
      async function handleFormSubmit(e: FormEvent) {
        e.preventDefault()
        if (!details.email || !details.name || !details.desc) {
          return toast({
            variant: "destructive",
            title: "Please fill the fields",
          })
        }
    
        try {
          setLoading(true)
          const response = await axios("/api/mail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data: details,
          })
    
          if (response.data.success) {
            console.log(response.data)
            setDetails({
              email: "",
              name: "",
              desc: "",
            })
            toast({
              variant: "success",
              title: "Your mail has been sent! I will reply back soon ✨",
            })
          } else {
            return toast({
              variant: "destructive",
              title: "Sorry, couldn't send the mail",
            })
          }
        } catch (error) {
          console.log(error)
          return toast({
            variant: "destructive",
            title: "Sorry, couldn't send the mail",
          })
        } finally {
          setLoading(false)
        }
      }
    
      function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const detailsCopy = details
        setDetails({ ...detailsCopy, [e.target.name]: e.target.value })
      }

 

  return (
    <form className={`${classes.form}`} onSubmit={handleFormSubmit}>
      <div className={`${classes.form__group}`}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          type="text"
          rows={5}
          placeholder="Message"
          required
        />
      </div>

      <button disabled className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;