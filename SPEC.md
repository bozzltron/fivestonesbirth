# Spec: Website Updates (Emails 1-2)

## Overview
Two updates from Dusti's emails:
1. Replace Encapsulation page with Buccal Massage + Face Sculpting
2. Replace Herbs page with Emotion Coding + Remove home page service tiles

---

## Update 1: Replace Encapsulation Page → Buccal Massage + Face Sculpting

### File: `views/pages/encapsulation.ejs`

#### Page Title (Tab Name)
- "Placenta Ecapsulation" → "Buccal Massage + Face Sculpting"

#### Hero Image
- Replace `images/encapsulation_main.jpg` → New image (to be provided)

#### Page Heading
- "Placenta Ecapsulation" → "Buccal and IntraOral + Facial Sculpting Massage"

#### Main Content
Replace with:
```
At Five Stones, it's more than just a Buccal Massage- it also includes facial sculpting (known as the non-surgical face lift) via facial Gua Sha, cupping and lymphatic drainage.

This 60 minutes of bliss is therapeutic and also cosmetic.

This treatment is beneficial if you experience:

- Jaw Pain/TMJ Discomfort
- Teeth Grinding and/or Clenching
- Headaches or Migraines
- Facial Tension/Adhesions Pulling Downward
- Swelling/Puffiness in the Face
- Neck Pain
- Anxiety

Sometimes we store emotions and trauma in our jaws, and I am here to hold space and help process if that happens. In addition to the therapeutic benefits of releasing tight muscles, eliminating tension and adhesions that pull the skin down allows us to achieve a lifted and relaxed appearance. The cupping and Gua Sha increase circulation, adding radiance and firmness that can diminish fine lines and wrinkles. With repeated sessions (4-7 weekly treatments might be recommended based on age and skin type) we can see improved skin thickness from the accumulated efforts. Arrive with a fresh, clean face and love the skin you are in again!

People in their 20's are doing this preventatively so they don't develop holding patterns and adhesions in their neck, jaw and facial muscles that pull downward. Men can enjoy this as well- they just need to be clean-shaven. My personal favorite is how the cupping on the lips makes them plumped up and everything feels firm and looks snatched.
```

---

## Update 2: Replace Herbs Page → Emotion Coding + Remove Home Page Tiles

### File: `views/pages/index.ejs`

#### Remove Service Tiles
- **Remove**: The entire `<section class="tiles">...</section>` block (lines 32-99)
- This removes the 6 service link boxes (Massage, Encapsulation, Herbs, Meditation, Yoga, Birth)

### File: `views/pages/herbs.ejs`

#### Page Title (Tab Name)
- Set to "Emotion Coding"

#### Hero Image
- Replace `images/herbs_main.jpg` → New image (to be provided)

#### Page Heading
- "Herbs" → "Emotion Coding"

#### Main Content
Replace with:
```
Emotion Coding is a wonderful way to release trapped emotions that are accidentally stored in the body during times of emotional overwhelm, trauma and stress. Once trapped, they impede the flow of energy, lymph and circulation and can cause and contribute to dis-ease, presenting in a variety of ways. By identifying and releasing these trapped emotions, we support your body's natural ability to heal and restore balance and flow. We allow them to process, move through and out.

It works well with Reiki and bodywork or is a great and transformational tool on its own. (It can be a stand-alone phone session or a 25-minute in-person add-on.) As something offered in person or virtually, even friends and family out of the area can access these incredible healing sessions. AND trapping emotions isn't something just humans do- pets that have experienced trauma can benefit greatly from energy healing as well.

Some things my clients are saying-

"I had been in a pattern of waking up with debilitating anxiety and dread to start my day. I noticed immediate relief and improvement after my session. I've experienced more patience when faced with daily challenges. In the past when I dreamed they were almost exclusively negative or nightmarish. Since my session I have experienced light, playful and happy dreams for the first time I can remember." -A.F., Nebraska

"Our dog, a feisty French Bulldog (rescue from a traumatic situation), began to noticeably relax after only two sessions. She clearly let her guard down and started letting more of her personality show through. She started playfully engaging with other dogs and wagging her tail, which were both new behaviors. She is noticeably lighter and calmer since the session." -M.B., Colorado

"I recommend emotional coding to anyone who has difficulty processing emotions, anyone who feels they are emotionally stuck or feeling weighed down with emotions but can't figure out why. It's easy, painless and makes a difference with the way you feel overall." -A.K., Colorado

"I felt peace and serenity, and more confident." - G.F, Iowa

"I've experienced a lot of emotional trauma throughout my life, and recently some of that older trauma has resurfaced. I turned to Dusti for Emotion Code therapy, and once again, I'm absolutely amazed by her incredible intuition and her ability to guide me into a profound state of healing. She mentioned that it would take about four days for me to release my trapped emotions, and on the third day, I experienced a breakthrough. During a quiet evening, a wave of emotions came flooding out through tears and laughter, and I felt a weight lift that I never imagined possible.

Dusti is truly one of a kind. I trust her completely to help me navigate my journey of healing and processing, and I will continue to choose her as my guide. She's even worked her magic on my sweet dog, Eleanor, who had been traumatized after getting her tail caught in my car's back hatch. Thanks to Dusti, Eleanor is happily jumping into my Jeep again. Dusti has an incredible gift, and I'm so grateful to have found her!" -M.D., Colorado

Other things mentioned anonymously:

"The absence of my anxiety after just one session was palpable. I couldn't believe how 'quiet' my brain was after."

"The emotions identified and the ages decoded were right on, it gave me goosebumps."

"I was working on "x" issue at therapy for weeks but still felt such emotional entanglement in the issue. I went back after one EC session and the triggered emotional response I had felt in my body was gone."

"This quickly advanced the things I was working on in daily meditations and therapy. I am making faster progress than ever and moving through things that once felt stuck."

"This is for energy healing what EMDR is for therapy. It feels too easy and simple to be true, but it isn't."

Here is a link that explains how Emotion Coding works: https://discoverhealing.com/articles/emotion-code-work/

What could you release?
```

---

## Out of Scope (Pending Future Emails)
- Third service page swap (email 3 of 3)
- Navigation/menu updates (removing old service names)

## Image Assets Needed
- New hero image for buccal massage page (to be provided)
- New hero image for emotion coding page (to be provided)

## Dependencies
- None (content-only change)
