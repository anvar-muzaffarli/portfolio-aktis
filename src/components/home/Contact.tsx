"use client";

import React, { useState, useRef } from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast"; // 1. Toast əlavə olundu
import { Mail, Instagram, SendHorizontal, CheckCircle2, Loader2, Phone, User, BookOpen, AlertCircle, ArrowLeft } from "lucide-react";

const schema = yup.object({
  user_name: yup.string().required("Ad və Soyad mütləqdir").min(3, "Ən az 3 simvol olmalıdır"),
  user_email: yup.string().email("Düzgün email ünvanı daxil edin").required("Email mütləqdir"),
  user_phone: yup.string().required("Əlaqə nömrəsi mütləqdir"),
  course_interest: yup.string().required("Zəhmət olmasa bir kurs seçin"),
}).required();

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async () => {
    setLoading(true);
    
    // Env dəyişənləri (Next.js üçün düzəldildi)
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_ID || "";

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setSubmitted(true);
          toast.success("Müraciətiniz uğurla göndərildi!", {
            duration: 5000,
            style: {
              borderRadius: '15px',
              background: '#333',
              color: '#fff',
            },
          });
          reset(); 
        })
        .catch((error) => {
          toast.error("Xəta baş verdi. Yenidən yoxlayın.");
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Section id="contact" title="Bizimlə əlaqə" subtitle="Kurslara qeydiyyat üçün müraciət formunu doldurun.">
      {/* 2. Toaster komponentini bura qoyuruq */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="grid gap-8 md:grid-cols-2 mt-8">
        {/* Sol Panel: Məlumatlar hissəsi eyni qalır */}
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-stone-800 mb-6 font-sans">Əlaqə Kanalları</h3>
            <div className="space-y-4">
              <a href="mailto:admission@anvarkhalid.com" className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 transition-all hover:border-stone-300">
                <div className="bg-black p-2.5 rounded-xl text-white"><Mail size={20} /></div>
                <span className="text-sm font-medium text-stone-600">admission@anvarkhalid.com</span>
              </a>
              <a href="https://instagram.com/anvarkhaliddcom" target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 transition-all hover:border-stone-300">
                <div className="bg-black p-2.5 rounded-xl text-white"><Instagram size={20} /></div>
                <span className="text-sm font-medium text-stone-600">@anvarkhaliddcom</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sağ Panel: Forma və Uğurlu Nəticə Modalı */}
        <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 shadow-sm min-h-[500px] flex flex-col justify-center transition-all duration-500">
          {!submitted ? (
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
              {/* Input sahələrin (User_name, Email, Phone, Course) olduğu kimi saxla... */}
              {/* QEYD: Əvvəlki mesajdakı inputları bura yerləşdir */}
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Ad Soyad *</label>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.user_name ? 'text-red-400' : 'text-stone-400'}`} size={16} />
                  <input {...register("user_name")} name="user_name" className={`w-full rounded-2xl border ${errors.user_name ? 'border-red-200 bg-red-50' : 'border-stone-200 bg-stone-50'} pl-11 pr-4 py-3 text-sm focus:border-black focus:outline-none transition-all`} placeholder="Anvar Khalid" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Email *</label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.user_email ? 'text-red-400' : 'text-stone-400'}`} size={16} />
                  <input {...register("user_email")} name="user_email" className={`w-full rounded-2xl border ${errors.user_email ? 'border-red-200 bg-red-50' : 'border-stone-200 bg-stone-50'} pl-11 pr-4 py-3 text-sm focus:border-black focus:outline-none transition-all`} placeholder="admission@anvarkhalid.com" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Telefon *</label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.user_phone ? 'text-red-400' : 'text-stone-400'}`} size={16} />
                  <input {...register("user_phone")} name="user_phone" className={`w-full rounded-2xl border ${errors.user_phone ? 'border-red-200 bg-red-50' : 'border-stone-200 bg-stone-50'} pl-11 pr-4 py-3 text-sm focus:border-black focus:outline-none transition-all`} placeholder="+994 50 000 00 00" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Kurs Seçimi *</label>
                <div className="relative">
                  <BookOpen className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.course_interest ? 'text-red-400' : 'text-stone-400'}`} size={16} />
                  <select {...register("course_interest")} name="course_interest" className={`w-full appearance-none rounded-2xl border ${errors.course_interest ? 'border-red-200 bg-red-50' : 'border-stone-200 bg-stone-50'} pl-11 pr-4 py-3 text-sm focus:border-black focus:outline-none transition-all cursor-pointer`}>
                    <option value="">Seçin...</option>
                    <option value="front-end">Front-end proqramlaşdırma</option>
                    <option value="back-end">Back-end proqramlaşdırma</option>
                    <option value="pentesting">Veb təhlükəsizlik</option>
                  </select>
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-black px-6 py-4 font-bold text-white transition-all hover:bg-stone-800 active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : "Müraciəti Tamamla"}
                {!loading && <SendHorizontal size={18} />}
              </button>
            </form>
          ) : (
            /* 3. DAHA COOL SUCCESS BOX */
            <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-500">
              <div className="relative mb-8">
                 <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-75"></div>
                 <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-200">
                   <CheckCircle2 size={48} strokeWidth={2.5} />
                 </div>
              </div>

              <h3 className="text-3xl font-black text-stone-900 tracking-tight">Təbriklər!</h3>
              <p className="mt-4 text-sm font-medium text-stone-500 leading-relaxed max-w-[280px]">
                Müraciətiniz qeydə alındı. Tezliklə akademiyanın nümayəndəsi sizinlə əlaqə saxlayacaq.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="group flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-[0.2em] transition-all hover:text-black"
                >
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                  Geri Qayıt
                </button>
                
                <div className="h-px w-12 bg-stone-100"></div>
                
                <p className="text-[10px] text-stone-400 italic">
                  Geri dönüş olmazsa Instagram-dan yazın.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}