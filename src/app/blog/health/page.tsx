"use client";

import React from "react";
import Link from "next/link";

import {
    BodyContainer,
    ParagraphContainer,
    ImportantSideNote, ListContainer, ResourceTitle, MainText
} from "./DailyHealth.styles";
import {PostContainer} from "@/styles/general.styles";

const resources = [
    {
        href: "https://www.youtube.com/@hubermanlab",
        label: "Dr. Andrew Huberman's YouTube Channel (General Health)",
    },
    {
        href: "https://hubermanlab.com/neural-network/",
        label: "Dr. Andrew Huberman's Newsletter (General Health)",
    },
    {
        href: "https://www.youtube.com/@PeterAttiaMD",
        label: "Dr. Peter Attia's YouTube Channel (Cardiovascular Health + Training)",
    },
    {
        href: "https://www.youtube.com/@FoundMyFitness",
        label: "Dr. Rhonda Patrick's YouTube Channel (Nutrition)",
    },
    {
        href: "https://www.youtube.com/@biolayne1",
        label: "Dr. Layne Norton's YouTube Channel (Training + Nutrition)",
    },
    {
        href: "https://www.youtube.com/@drandygalpin",
        label: "Dr. Andy Galpin's YouTube Channel (Best Training Resource)",
    },
];

const Resources = () => (
    <div>
        <p>If you want to live the best life you can, here are all the resources you need:</p>
        <ul>
            {resources.map(({ href, label }, index) => (
                <ListContainer key={index}>
                    <ResourceTitle href={href} target="_blank" rel="noopener noreferrer">
                        {label}
                    </ResourceTitle>
                </ListContainer>
            ))}
        </ul>
    </div>
);

const DailyHealth = () => {
    return (
        <>
            <BodyContainer>
                <PostContainer>
                    <ParagraphContainer>
                        <p>04.01.2025</p>
                        <MainText>
                            <strong>Short Version:</strong>
                        </MainText>
                        <ul>
                            <ListContainer>Sleep: Aim for 8 hours of sleep every night.</ListContainer>
                            <ListContainer>Sunlight: Spend 15 minutes in the sun first thing in the morning to boost your cortisol
                                levels.</ListContainer>
                            <ListContainer>Coffee: Avoid drinking coffee in the first two hours of the day and in the last 10 hours of
                                the day.</ListContainer>
                            <ListContainer>Eating: Eat as little as you can without feeling really hungry and avoid sugar and fried
                                foods.</ListContainer>
                            <ListContainer>Smoking: Don't smoke, as it's a silent killer of your heart.</ListContainer>
                            <ListContainer>Hydration: Drink water with electrolytes.</ListContainer>
                            <ListContainer>Supplements: Take vitamin D3 + K2, low-dose multivitamins, and creatine.</ListContainer>
                            <ListContainer>Alcohol: Avoid alcohol in the last 12 hours of the day as much as you can.</ListContainer>
                            <ListContainer>Exercise: Aim for 15 minutes of cardio, 40 minutes of strength training, and 5 minutes of
                                stretching every day. If you can't do this, do something, but don't be lazy.</ListContainer>
                            <ListContainer>Challenge yourself: Do a hard thing every day, such as taking a cold shower, meditating for
                                15 minutes, or doing a hard workout.</ListContainer>
                            <ListContainer>Don’t stress about it. It will be fine. Don’t try to be perfect</ListContainer>
                        </ul>
                        <MainText>
                            <strong>Long Version:</strong>
                        </MainText>


                        <div>
                            <p>Let me tell you a bit about myself. I graduated Pharmacy from the University of
                                Medicine and Pharmacy Iuliu Hatieganu Cluj-Napoca. Although pharmacy was my major, programming has
                                always been my true passion.</p>
                            <p>During my last years at university, I started learning programming on my own. After graduating, I
                                applied for programming jobs and was lucky enough to land a job as a front-end developer with React.
                                It's been almost three years since then, and I have been enjoying my work as a developer every day.</p>
                            <ImportantSideNote>Before we delve into today's topic, I want to make an important disclaimer. Please note that the advice
                                provided in this blog is not intended to replace the advice of your personal doctor. The content here is
                                primarily aimed at healthy individuals, and while some of the advice may be helpful for certain
                                conditions, other advice may have adverse effects. Therefore, it is always best to consult with your
                                doctor before following any advice given here.</ImportantSideNote>
                            <p><u>Suggestions for Maintaining Good Health:</u></p>
                            <ul>
                                <ListContainer>Aim for regular check-ups with your doctor at least once a year.</ListContainer>
                                <ListContainer>This should include an ultrasound check of your cardiovascular system with a
                                    cardiologist, an examination of your thyroid gland with an endocrinologist, and a check-up of your
                                    abdominal area with an internal medicine specialist, urologist, or gynecologist.</ListContainer>
                                <ListContainer>Do a complete blood panel at least once every six months.</ListContainer>
                                <ListContainer>This will help detect any potential health issues early on, allowing for prompt treatment
                                    and prevention of more significant health problems down the road.</ListContainer>
                                <ListContainer>Invest in your health through regular check-ups and preventative
                                    measures.</ListContainer>
                                <ListContainer>Remember, investing in your health can save you money in the long run and, most
                                    importantly, can help you maintain good health for a lifetime. But, as always, please consult with
                                    your doctor before making any decisions regarding your health.</ListContainer>
                            </ul>
                        </div>

                        <p><u>I will outline the most crucial blood work with their implications:</u></p>

                        <ul>
                            <ListContainer>HbA1c: This measures your blood sugar levels over the past 90 days. Ideally, it should be
                                below 5%, and it's essential for managing diabetes and cardiovascular health.</ListContainer>
                            <ListContainer>Uric Acid: This measures a protein metabolite in your blood. Ideally, it should be below
                                5.5mg/dL, and it's involved in obesity, cardiovascular health, and gout.</ListContainer>
                            <ListContainer>ApoLipoprotein a1 / ApoLipoprotein b: These are genetic markers and the best metrics for
                                measuring cholesterol levels. Along with LDL, HDL, total cholesterol, and triglycerides, ApoLipoprotein
                                b is the most important one and should be under 0.6g/L. Everything else should be in range</ListContainer>
                            <ListContainer>TGO / TGP: These tests measure liver health and should be within normal
                                limits.</ListContainer>
                            <ListContainer>Seric Creatinine: This measures kidney function and is an important indicator of overall
                                kidney health. Should be within normal limits.</ListContainer>
                            <ListContainer>T3/T4/TSH: These tests measure thyroid function and are crucial for maintaining good
                                health. Should be within normal limits.</ListContainer>
                            <ListContainer>Total Testosterone: This test is only relevant for men and measures the level of
                                testosterone in their blood. Ideally, it should be above 700ng/dL for a man to feel great and below 1200ng/dL. It can have side effects above this. We live in a society where a lot of men have really low testosterone.</ListContainer>
                            <ListContainer>Free Testosterone: This test is also only relevant for men and measures the percentage of
                                free testosterone in their blood, which should be at least 2% of the total. This is the actual testosteron that the body uses.</ListContainer>
                        </ul>

                        <ImportantSideNote>Remember, please consult with your doctor before making any decisions regarding your health.</ImportantSideNote>

                        <div>
                            <h3>Let’s start talking about our daily habits, things that we can do to improve our daily perception of the world.</h3>
                            <p><u>Sleep is the most essential aspect of our lives</u>.</p>
                            <p> Getting the recommended 7-9 hours of sleep each night is crucial for our health and wellbeing. While some people may claim they can function well on only 6 hours of sleep, this is only true for a very small percentage of individuals. For most people, getting less than 7 hours of sleep can lead to poor critical thinking, mental fog, impaired judgement, and an overall feeling of fatigue.</p>
                            <p>The consequences of insufficient sleep are numerous, including an increased risk of Alzheimer's disease, reduced testosterone levels (which are important for muscle building, energy, motivation, and sex drive), and impaired memory consolidation. REM sleep helps us process traumatic events, while deep sleep is critical for long-term memory formation. Thus, no matter how much you study during the day, if you don't get enough sleep, your efforts may be in vain.</p>
                            <p>Here are some tips for getting a better night's sleep:</p>
                            <ul>
                                <ListContainer>Try to maintain a regular sleep schedule by going to bed and waking up at the same time every day. This can help regulate your body's sleep-wake cycle and improve the quality of your sleep.</ListContainer>
                                <ListContainer>Keep your bedroom cool (around 17-21 degrees Celsius) for optimal sleep conditions.</ListContainer>
                                <ListContainer>Use earplugs to block out sudden noises that might disrupt your sleep.</ListContainer>
                                <ListContainer>Avoid bright lights before bedtime, as they can suppress melatonin production and interfere with your sleep.</ListContainer>
                                <ListContainer>Visit an ear, nose, and throat (ORL) doctor to check your nasal passages, as poor breathing through the nose is a common issue that can lead to snoring and sleep apnea (which can be a risk factor for sudden death during sleep).</ListContainer>
                                <ListContainer>Avoid eating for at least 3 hours before bedtime, as this can interfere with your sleep stages!!!</ListContainer>
                                <ListContainer>Limit your alcohol intake, especially in the hours leading up to bedtime!!!</ListContainer>
                                <ListContainer>Avoid using melatonin supplements for sleep, as they can be dangerous when used improperly.</ListContainer>
                                <ListContainer>If you're considering sleep supplements, try magnesium bisglycinate and theanine, but use them sparingly, as your body can develop a tolerance to them over time.</ListContainer>
                            </ul>
                        </div>


                        <br/>
                        <br/>

                        <div>
                            <p><u>The most powerfull habit that you can adopt starting tomorrow is to expose yourself to direct sunlight first thing in the morning.</u></p>
                            <p>This practice can do wonders for your overall health and well-being. Unlike coffee, which can leave you feeling jittery and anxious, sunlight wakes you up in a more natural and holistic way. It stimulates metabolic pathways and triggers the release of cortisol, a hormone that is essential for life. While cortisol has a bad reputation, it is actually a vital hormone that helps regulate many bodily processes, including the immune system, metabolism, and focus.</p>
                            <p>Moreover, exposing yourself to morning sunlight can help reset your circadian clock, which is responsible for regulating sleep, hunger, and body temperature. Even on cloudy days, the sun emits enough light to have a positive impact on your health. It's important to note that you should avoid wearing sunglasses or looking through windows or car windshields, as they can filter out the relevant wavelengths of light. A 15-minute exposure every morning is all it takes to reap the benefits of sunlight.</p>
                            <p>In addition, exposure to the light from the sunset can help prepare your body for sleep. However, this is not as crucial as the morning exposure. So, if you want to establish a new healthy habit, make sure to prioritize morning sunlight exposure.</p>
                        </div>

                        <br/>
                        <br/>


                        <div>
                            <p><u> The favorite drink of the planet: coffee. I have only love for coffee but the time we consume it can be heavily improved.</u></p>
                            <p>Wait at least two hours after waking up to have your first cup of coffee. This is because the body needs time to clear adenosine, the compound responsible for making us feel sleepy. If you drink coffee too early, caffeine will replace the adenosine in your receptors and give you the opposite effect of wakefulness. Furthermore, if your body doesn't know it has extra adenosine to clear, it won't do so, and after about 5 hours, when the caffeine has worn off, the adenosine will bind to the receptors again and you'll experience morning sleepiness in the afternoon. Pair this with a heavy meal, and your productivity and energy for the next 6 hours can be compromised.</p>

                            <p>Coffee has many benefits, such as preventing Alzheimer's disease.</p>

                            <p>To fully experience the effects of coffee, take 3-7 days off from consuming it every month. This will allow your receptors to become more sensitive to caffeine again.</p>

                            <p>Avoid consuming caffeine within 8-10 hours of bedtime. Doing so can interfere with your sleep stages and reduce the quality of your sleep. While some people may claim to be able to drink espresso at 10 pm without any ill effects, the quality of their 8 hours of sleep may be significantly reduced.</p>
                        </div>

                        <br/>
                        <br/>

                        <div>
                            <p>
                                <u>
                                    Learning never stops. You should always learn or you will be left behind in this information era.
                                </u>
                            </p>
                            <p>Learning is a great way to keep your mind young and improve your cognitive abilities.</p>



                            <p>The best times to learn are in the morning and afternoon, ideally in 90-minute intervals. If you have limited time, the morning session alone can also be effective.</p>



                            <p>To maximize your learning, try breaking the 90-minute interval into two or three sessions and learn different things. For example, learn something related to your job, something that enhances your creativity, and something general that broadens your perspectives. Use different methods of learning such as reading, listening, and hands-on activities.</p>



                            <p>A helpful tip for remembering what you have learned is to increase your adrenaline levels at the end of the learning session. Adrenaline is critical for memory consolidation, and you are more likely to remember things that trigger an adrenaline rush. Some easy ways to increase adrenaline include taking a cold shower, meditating for 15 minutes, or having coffee (yes, after you learn).</p>
                        </div>


                        <br/>
                        <br/>
                        <div>
                            <p><u>Eating habits play a crucial role in our health and energy levels. Here are some tips to optimize your meals throughout the day:</u></p>
                            <ul>
                                <ListContainer>Avoid eating in the first hour of the day since your body is not yet fully awake and ready for digestion.</ListContainer>
                                <ListContainer>Do not eat in the last 3 hours of the day to avoid disrupting your sleep, which can lead to fatigue and other health issues.</ListContainer>
                                <ListContainer>Be mindful of your carb intake, especially in the morning, to prevent a sugar crash later in the day. Whole grains, fruits, and vegetables are good sources of complex carbs that provide sustained energy.</ListContainer>
                                <ListContainer>Limit your sugar and fried food consumption to special occasions or small treats. These foods can be addictive and lead to weight gain, inflammation, and other health problems if consumed in excess.</ListContainer>
                                <ListContainer>Make sure to get enough protein, which is essential for building and repairing tissues, maintaining a healthy weight, and preventing cravings. Aim for about 2 grams per kilogram of body weight per day, or adjust according to your activity level and goals.</ListContainer>
                                <ListContainer>Stay hydrated throughout the day, as dehydration can sometimes be mistaken for hunger. Water is the best choice, but you can also have unsweetened tea, coffee, or infused water for variety.</ListContainer>
                                <ListContainer>Avoid constant snacking or grazing throughout the day. Instead, focus on creating balanced and satisfying meals that meet your nutritional needs and personal preferences. Find a sustainable and enjoyable eating pattern that works for you in the long term.</ListContainer>
                            </ul>
                        </div>


                        <br/>
                        <br/>
                        <div>
                            <p><u>Let's talk about supplementation.</u>></p>
                            <ul>
                                <ListContainer>Starting your day with hydration is crucial - make sure to drink plenty of water and electrolytes. It's also important to hydrate well a couple of hours before working out since sweating can lead to sodium loss, around 0.5-1g per workout.</ListContainer>
                                <ListContainer>Vitamin D is a critical nutrient that most people are deficient in, and it plays an important role in bone health, immunity, and metabolic pathways. It's challenging to get enough vitamin D from food, so it's recommended to supplement with at least 1000 UI. Additionally, Vitamin D works well with vitamin K2, which helps protect against arteriosclerosis. Some supplements that have both emerged on the market in recent years.</ListContainer>
                                <ListContainer>Multiple studies have shown that multivitamins can support longevity. It's essential to choose low dosage ones.</ListContainer>
                                <ListContainer>Creatine is an excellent supplement for building muscle and is known among fitness enthusiasts. However, it's not commonly known that it can also benefit the brain and cognitive function.</ListContainer>
                            </ul>
                        </div>


                        <br/>
                        <br/>


                        <div>
                            <p><u>Let's Talk About Working Out</u></p>
                            <ul>
                                <ListContainer>
                                    The best time to work out is in the morning, but if that doesn't work for you, aim for the evening instead. Excuses won't get you anywhere, so make time for 15 minutes of cardio, squats, and pushups. If you can go to the fridge, you can exercise. Don't say you can't, say you don't want to.
                                </ListContainer>
                                <ListContainer>
                                    Ideally, you should aim for 120 minutes of cardio to protect your heart, but even 15 minutes of zone 2 cardio per day is crucial. Healthy individuals should have a resting heart rate below 60bpm. Apple products are known for their advanced heart-tracking capabilities, but cheaper alternatives like Huawei are also effective for monitoring heart rate at rest.
                                </ListContainer>
                                <ListContainer>
                                    Strength training for 40 minutes is best for overall health, strengthening bones and preventing osteoporosis, aiding in weight loss, and keeping you young. Avoid lifting too heavy to prevent injury, which can hinder your progress. Doing deadlifts with 50kg consistently is healthier than lifting 150kg once a week and experiencing back pain.
                                </ListContainer>
                                <ListContainer>
                                    Leg day should be on Monday, as it helps boost testosterone levels and keeps you energized all week. Skipping leg day is not an option.
                                </ListContainer>
                                <ListContainer>
                                    Don't ignore pain in your back, shoulder, neck, or knee. Consult a physiotherapist to address these issues. Long-term inactivity can negatively impact your health.
                                </ListContainer>
                                <ListContainer>
                                    Recent studies have shown that sauna sessions can be as beneficial for preventing cardiovascular events as running. Additionally, it reduces inflammation and helps improve sleep quality. Try to incorporate 15-20 minute sauna sessions into your routine as often as possible.
                                </ListContainer>
                            </ul>
                        </div>


                        <br/>
                        <br/>

                        <div>
                            <p><u>Avoid stacking dopamine & work hard for your dopamine!</u></p>
                            <p> For instance, if you're scrolling through social media while snacking on unhealthy food and drinking soda, you're creating a large dopamine peak that will ultimately lead to a bigger crash. This cycle can cause addiction, as you may continue seeking out the same activities that caused the initial dopamine release. It's okay to indulge occasionally, such as enjoying a snack during a movie, but try not to make it a daily habit. This same mechanism is seen in cocaine use, where the drug provides an intense high followed by a severe crash.</p>
                            <p>But if you work hard for your dopamine, it's actually healthy for the brain to get it after an intense task. This keeps your sense of living alive</p>
                            <p>Also the dopamine from a cold shower or a hard workout doesn't create a crash or a negative peak and it keep the dopamine levels and your motivation high for many hours after.</p>
                        </div>

                        <br/>
                        <br/>

                        <div>
                            <p><u>DO A HARD THING EVERYDAY:</u></p>
                            <ul>
                                <ListContainer>
                                    Our human brain is incredibly adaptable, which is why we have been able to conquer the planet. However, if we don't challenge ourselves, our brain can adapt in a negative way. By doing something challenging every day, we train our brain to handle difficult situations and become more resilient.
                                </ListContainer>
                                <ListContainer>
                                    For example, doing a tough workout, taking a cold shower, sitting in a sauna, or running 10km. When we face these challenges, we can handle the small annoyances that come our way with ease. It's not the circumstances we face, but rather how we perceive them that determines our happiness.
                                </ListContainer>
                                <ListContainer>
                                    So, challenge yourself every day and watch your mindset shift towards a more positive and resilient one.
                                </ListContainer>
                            </ul>
                        </div>
                        <Resources />
                    </ParagraphContainer>
                </PostContainer>
            </BodyContainer>
        </>
    );
};

export default DailyHealth;
