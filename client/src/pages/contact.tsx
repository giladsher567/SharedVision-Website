export default function ContactPage() {
    return (
        <div className="min-h-screen bg-space-deep text-light-gray px-4 py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-heebo text-4xl md:text-5xl font-bold text-white mb-6">
                    צור קשר
                </h1>

                <p className="text-lg mb-10">
                    השאירו פרטים ונחזור אליכם בהקדם לשיחת ייעוץ קצרה וללא התחייבות.
                </p>

                <form
                    action="https://formspree.io/f/mpqwwgyd"
                    method="POST"
                    className="space-y-6 bg-space-deep-lighter p-8 rounded-xl border border-gray-700/50"
                >
                    <div>
                        <label className="block mb-2">שם מלא</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-lg p-3 bg-space-deep border border-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">אימייל</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-lg p-3 bg-space-deep border border-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">טלפון</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full rounded-lg p-3 bg-space-deep border border-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">במה נוכל לעזור?</label>
                        <textarea
                            name="message"
                            rows={4}
                            className="w-full rounded-lg p-3 bg-space-deep border border-gray-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full text-lg"
                    >
                        שלח פנייה
                    </button>
                </form>
            </div>
        v>
    
}
