const createChapter = (title, chap, img, texts ) => ({ title, chap, img, texts  });

const chapters = {
    0: {
      title: "Through the Looking-Glass",
      year: "1871"
    },

    1: createChapter("Looking-Glass House", "I", "https://placehold.co/25", [
      {
        text: "One thing was certain, that the <i>white</i> kitten had had nothing to do with it:—it was the black kitten’s fault entirely. For the white kitten had been having its face washed by the old cat for the last quarter of an hour (and bearing it pretty well, considering); so you see that it <i>couldn’t</i> have had any hand in the mischief.",
        className: "chapter_text"
      },{
        text: "The way Dinah washed her children’s faces was this: first she held the poor thing down by its ear with one paw, and then with the other paw she rubbed its face all over, the wrong way, beginning at the nose: and just now, as I said, she was hard at work on the white kitten, which was lying quite still and trying to purr—no doubt feeling that it was all meant for its good.",
        className: "chapter_text"
      },{
        text: "But the black kitten had been finished with earlier in the afternoon, and so, while Alice was sitting curled up in a corner of the great arm-chair, half talking to herself and half asleep, the kitten had been having a grand game of romps with the ball of worsted Alice had been trying to wind up, and had been rolling it up and down till it had all come undone again; and there it was, spread over the hearth-rug, all knots and tangles, with the kitten running after its own tail in the middle.",
        className: "chapter_text"
      },{
        text: "“Oh, you wicked little thing!” cried Alice, catching up the kitten, and giving it a little kiss to make it understand that it was in disgrace. “Really, Dinah ought to have taught you better manners! You <i>ought</i>, Dinah, you know you ought!” she added, looking reproachfully at the old cat, and speaking in as cross a voice as she could manage—and then she scrambled back into the arm-chair, taking the kitten and the worsted with her, and began winding up the ball again. But she didn’t get on very fast, as she was talking all the time, sometimes to the kitten, and sometimes to herself. Kitty sat very demurely on her knee, pretending to watch the progress of the winding, and now and then putting out one paw and gently touching the ball, as if it would be glad to help, if it might.",
        className: "chapter_text"
      },{
        text: "“Do you know what to-morrow is, Kitty?” Alice began. “You’d have guessed if you’d been up in the window with me—only Dinah was making you tidy, so you couldn’t. I was watching the boys getting in sticks for the bonfire—and it wants plenty of sticks, Kitty! Only it got so cold, and it snowed so, they had to leave off. Never mind, Kitty, we’ll go and see the bonfire to-morrow.” Here Alice wound two or three turns of the worsted round the kitten’s neck, just to see how it would look: this led to a scramble, in which the ball rolled down upon the floor, and yards and yards of it got unwound again.",
        className: "chapter_text"
      },{
        text: "“Do you know, I was so angry, Kitty,” Alice went on as soon as they were comfortably settled again, “when I saw all the mischief you had been doing, I was very nearly opening the window, and putting you out into the snow! And you’d have deserved it, you little mischievous darling! What have you got to say for yourself? Now don’t interrupt me!” she went on, holding up one finger. “I’m going to tell you all your faults. Number one: you squeaked twice while Dinah was washing your face this morning. Now you can’t deny it, Kitty: I heard you! What’s that you say?” (pretending that the kitten was speaking.) “Her paw went into your eye? Well, that’s your fault, for keeping your eyes open—if you’d shut them tight up, it wouldn’t have happened. Now don’t make any more excuses, but listen! Number two: you pulled Snowdrop away by the tail just as I had put down the saucer of milk before her! What, you were thirsty, were you? How do you know she wasn’t thirsty too? Now for number three: you unwound every bit of the worsted while I wasn’t looking!",
        className: "chapter_text"
      },{
        text: "“That’s three faults, Kitty, and you’ve not been punished for any of them yet. You know I’m saving up all your punishments for Wednesday week—Suppose they had saved up all <i>my</i> punishments!” she went on, talking more to herself than the kitten. “What would they do at the end of a year? I should be sent to prison, I suppose, when the day came. Or—let me see—suppose each punishment was to be going without a dinner: then, when the miserable day came, I should have to go without fifty dinners at once! Well, I shouldn’t mind <i>that</i> much! I’d far rather go without them than eat them!",
        className: "chapter_text"
      },{
        text: "“Do you hear the snow against the window-panes, Kitty? How nice and soft it sounds! Just as if some one was kissing the window all over outside. I wonder if the snow <i>loves</i> the trees and fields, that it kisses them so gently? And then it covers them up snug, you know, with a white quilt; and perhaps it says, ‘Go to sleep, darlings, till the summer comes again.’ And when they wake up in the summer, Kitty, they dress themselves all in green, and dance about—whenever the wind blows—oh, that’s very pretty!” cried Alice, dropping the ball of worsted to clap her hands. “And I do so wish it was true! I’m sure the woods look sleepy in the autumn, when the leaves are getting brown.",
        className: "chapter_text"
      },{
        text: "“Kitty, can you play chess? Now, don’t smile, my dear, I’m asking it seriously. Because, when we were playing just now, you watched just as if you understood it: and when I said ‘Check!’ you purred! Well, it was a nice check, Kitty, and really I might have won, if it hadn’t been for that nasty Knight, that came wiggling down among my pieces. Kitty, dear, let’s pretend—” And here I wish I could tell you half the things Alice used to say, beginning with her favourite phrase “Let’s pretend.” She had had quite a long argument with her sister only the day before—all because Alice had begun with “Let’s pretend we’re kings and queens;” and her sister, who liked being very exact, had argued that they couldn’t, because there were only two of them, and Alice had been reduced at last to say, “Well, you can be one of them then, and I’ll be all the rest.” And once she had really frightened her old nurse by shouting suddenly in her ear, “Nurse! Do let’s pretend that I’m a hungry hyaena, and you’re a bone.”",
        className: "chapter_text"
      },{
        text: "But this is taking us away from Alice’s speech to the kitten. “Let’s pretend that you’re the Red Queen, Kitty! Do you know, I think if you sat up and folded your arms, you’d look exactly like her. Now do try, there’s a dear!” And Alice got the Red Queen off the table, and set it up before the kitten as a model for it to imitate: however, the thing didn’t succeed, principally, Alice said, because the kitten wouldn’t fold its arms properly. So, to punish it, she held it up to the Looking-glass, that it might see how sulky it was—“and if you’re not good directly,” she added, “I’ll put you through into Looking-glass House. How would you like <i>that?</i>”",
        className: "chapter_text"
      },{
        text: "“Now, if you’ll only attend, Kitty, and not talk so much, I’ll tell you all my ideas about Looking-glass House. First, there’s the room you can see through the glass—that’s just the same as our drawing room, only the things go the other way. I can see all of it when I get upon a chair—all but the bit behind the fireplace. Oh! I do so wish I could see <i>that</i> bit! I want so much to know whether they’ve a fire in the winter: you never <i>can</i> tell, you know, unless our fire smokes, and then smoke comes up in that room too—but that may be only pretence, just to make it look as if they had a fire. Well then, the books are something like our books, only the words go the wrong way; I know that, because I’ve held up one of our books to the glass, and then they hold up one in the other room.",
        className: "chapter_text"
      },{
        text: "“How would you like to live in Looking-glass House, Kitty? I wonder if they’d give you milk in there? Perhaps Looking-glass milk isn’t good to drink—But oh, Kitty! now we come to the passage. You can just see a little <i>peep</i> of the passage in Looking-glass House, if you leave the door of our drawing-room wide open: and it’s very like our passage as far as you can see, only you know it may be quite different on beyond. Oh, Kitty! how nice it would be if we could only get through into Looking-glass House! I’m sure it’s got, oh! such beautiful things in it! Let’s pretend there’s a way of getting through into it, somehow, Kitty. Let’s pretend the glass has got all soft like gauze, so that we can get through. Why, it’s turning into a sort of mist now, I declare! It’ll be easy enough to get through—” She was up on the chimney-piece while she said this, though she hardly knew how she had got there. And certainly the glass was beginning to melt away, just like a bright silvery mist.",
        className: "chapter_text"
      },{
        text: "In another moment Alice was through the glass, and had jumped lightly down into the Looking-glass room. The very first thing she did was to look whether there was a fire in the fireplace, and she was quite pleased to find that there was a real one, blazing away as brightly as the one she had left behind. “So I shall be as warm here as I was in the old room,” thought Alice: “warmer, in fact, because there’ll be no one here to scold me away from the fire. Oh, what fun it’ll be, when they see me through the glass in here, and can’t get at me!”",
        className: "chapter_text"
      },{
        text: "Then she began looking about, and noticed that what could be seen from the old room was quite common and uninteresting, but that all the rest was as different as possible. For instance, the pictures on the wall next the fire seemed to be all alive, and the very clock on the chimney-piece (you know you can only see the back of it in the Looking-glass) had got the face of a little old man, and grinned at her.",
        className: "chapter_text"
      },{
        text: "“They don’t keep this room so tidy as the other,” Alice thought to herself, as she noticed several of the chessmen down in the hearth among the cinders: but in another moment, with a little “Oh!” of surprise, she was down on her hands and knees watching them. The chessmen were walking about, two and two!",
        className: "chapter_text"
      },{
        text: "“Here are the Red King and the Red Queen,” Alice said (in a whisper, for fear of frightening them), “and there are the White King and the White Queen sitting on the edge of the shovel—and here are two castles walking arm in arm—I don’t think they can hear me,” she went on, as she put her head closer down, “and I’m nearly sure they can’t see me. I feel somehow as if I were invisible—”",
        className: "chapter_text"
      },{
        text: "Here something began squeaking on the table behind Alice, and made her turn her head just in time to see one of the White Pawns roll over and begin kicking: she watched it with great curiosity to see what would happen next.",
        className: "chapter_text"
      },{
        text: "“It is the voice of my child!” the White Queen cried out as she rushed past the King, so violently that she knocked him over among the cinders. “My precious Lily! My imperial kitten!” and she began scrambling wildly up the side of the fender.",
        className: "chapter_text"
      },{
        text: "“Imperial fiddlestick!” said the King, rubbing his nose, which had been hurt by the fall. He had a right to be a little annoyed with the Queen, for he was covered with ashes from head to foot.",
        className: "chapter_text"
      },{
        text: "Alice was very anxious to be of use, and, as the poor little Lily was nearly screaming herself into a fit, she hastily picked up the Queen and set her on the table by the side of her noisy little daughter.",
        className: "chapter_text"
      },{
        text: "The Queen gasped, and sat down: the rapid journey through the air had quite taken away her breath and for a minute or two she could do nothing but hug the little Lily in silence. As soon as she had recovered her breath a little, she called out to the White King, who was sitting sulkily among the ashes, “Mind the volcano!”",
        className: "chapter_text"
      },{
        text: "“What volcano?” said the King, looking up anxiously into the fire, as if he thought that was the most likely place to find one.",
        className: "chapter_text"
      },{
        text: "“Blew—me—up,” panted the Queen, who was still a little out of breath. “Mind you come up—the regular way—don’t get blown up!”",
        className: "chapter_text"
      },{
        text: "Alice watched the White King as he slowly struggled up from bar to bar, till at last she said, “Why, you’ll be hours and hours getting to the table, at that rate. I’d far better help you, hadn’t I?” But the King took no notice of the question: it was quite clear that he could neither hear her nor see her.",
        className: "chapter_text"
      },{
        text: "So Alice picked him up very gently, and lifted him across more slowly than she had lifted the Queen, that she mightn’t take his breath away: but, before she put him on the table, she thought she might as well dust him a little, he was so covered with ashes.",
        className: "chapter_text"
      },{
        text: "She said afterwards that she had never seen in all her life such a face as the King made, when he found himself held in the air by an invisible hand, and being dusted: he was far too much astonished to cry out, but his eyes and his mouth went on getting larger and larger, and rounder and rounder, till her hand shook so with laughing that she nearly let him drop upon the floor.",
        className: "chapter_text"
      },{
        text: "“Oh! <i>please</i> don’t make such faces, my dear!” she cried out, quite forgetting that the King couldn’t hear her. “You make me laugh so that I can hardly hold you! And don’t keep your mouth so wide open! All the ashes will get into it—there, now I think you’re tidy enough!” she added, as she smoothed his hair, and set him upon the table near the Queen.",
        className: "chapter_text"
      },{
        text: "The King immediately fell flat on his back, and lay perfectly still: and Alice was a little alarmed at what she had done, and went round the room to see if she could find any water to throw over him. However, she could find nothing but a bottle of ink, and when she got back with it she found he had recovered, and he and the Queen were talking together in a frightened whisper—so low, that Alice could hardly hear what they said.",
        className: "chapter_text"
      },{
        text: "The King was saying, “I assure, you my dear, I turned cold to the very ends of my whiskers!”",
        className: "chapter_text"
      },{
        text: "To which the Queen replied, “You haven’t got any whiskers.”",
        className: "chapter_text"
      },{
        text: "“The horror of that moment,” the King went on, “I shall never, never forget!”",
        className: "chapter_text"
      },{
        text: "“You will, though,” the Queen said, “if you don’t make a memorandum of it.”",
        className: "chapter_text"
      },{
        text: "Alice looked on with great interest as the King took an enormous memorandum-book out of his pocket, and began writing. A sudden thought struck her, and she took hold of the end of the pencil, which came some way over his shoulder, and began writing for him.",
        className: "chapter_text"
      },{
        text: "The poor King looked puzzled and unhappy, and struggled with the pencil for some time without saying anything; but Alice was too strong for him, and at last he panted out, “My dear! I really must get a thinner pencil. I can’t manage this one a bit; it writes all manner of things that I don’t intend—”",
        className: "chapter_text"
      },{
        text: "“What manner of things?” said the Queen, looking over the book (in which Alice had put <i>“The White Knight is sliding down the poker. He balances very badly”</i>) “That’s not a memorandum of your feelings!”",
        className: "chapter_text"
      },{
        text: "There was a book lying near Alice on the table, and while she sat watching the White King (for she was still a little anxious about him, and had the ink all ready to throw over him, in case he fainted again), she turned over the leaves, to find some part that she could read, “—for it’s all in some language I don’t know,” she said to herself.",
        className: "chapter_text"
      },{
        text: "It was like this.",
        className: "chapter_text"
      },{
        text: ".YKCOWREBBAJ",
        className: "chapter_text"
      },{
        text: "sevot yhtils eht dna, gillirb sawT’<br/>ebaw eht ni elbmig dna eryg diD<br/>     ,sevogorob eht erew ysmim llA<br/>.ebargtuo shtar emom eht dnA<br/><br/>",
        className: "chapter_text_cit"
      },{
        text: "She puzzled over this for some time, but at last a bright thought struck her. “Why, it’s a Looking-glass book, of course! And if I hold it up to a glass, the words will all go the right way again.”",
        className: "chapter_text"
      },{
        text: "This was the poem that Alice read.",
        className: "chapter_text"
      },{
        text: "JABBERWOCKY.",
        className: "chapter_text"
      },{
        text: "’Twas brillig, and the slithy toves<br/>Did gyre and gimble in the wabe;<br/>All mimsy were the borogoves,<br/>And the mome raths outgrabe.",
        className: "chapter_text_cit"
      },{
        text: "“Beware the Jabberwock, my son!<br/>The jaws that bite, the claws that catch!<br/>Beware the Jubjub bird, and shun<br/>The frumious Bandersnatch!”",
        className: "chapter_text_cit"
      },{
        text: "He took his vorpal sword in hand:<br/>Long time the manxome foe he sought—<br/>So rested he by the Tumtum tree,<br/>And stood awhile in thought.",
        className: "chapter_text_cit"
      },{
        text: "And as in uffish thought he stood,<br/>The Jabberwock, with eyes of flame,<br/>Came whiffling through the tulgey wood,<br/>And burbled as it came!",
        className: "chapter_text_cit"
      },{
        text: "One, two! One, two! And through and through<br/>The vorpal blade went snicker-snack!<br/>He left it dead, and with its head<br/>He went galumphing back.",
        className: "chapter_text_cit"
      },{
        text: "“And hast thou slain the Jabberwock?<br/>Come to my arms, my beamish boy!<br/>O frabjous day! Callooh! Callay!”<br/>He chortled in his joy.",
        className: "chapter_text_cit"
      },{
        text: "’Twas brillig, and the slithy toves<br/>Did gyre and gimble in the wabe;<br/>All mimsy were the borogoves,<br/>And the mome raths outgrabe.<br/><br/>",
        className: "chapter_text_cit"
      },{
        text: "“It seems very pretty,” she said when she had finished it, “but it’s <i>rather</i> hard to understand!” (You see she didn’t like to confess, even to herself, that she couldn’t make it out at all.) “Somehow it seems to fill my head with ideas—only I don’t exactly know what they are! However, <i>somebody</i> killed <i>something</i>: that’s clear, at any rate—”",
        className: "chapter_text"
      },{
        text: "“But oh!” thought Alice, suddenly jumping up, “if I don’t make haste I shall have to go back through the Looking-glass, before I’ve seen what the rest of the house is like! Let’s have a look at the garden first!” She was out of the room in a moment, and ran down stairs—or, at least, it wasn’t exactly running, but a new invention of hers for getting down stairs quickly and easily, as Alice said to herself. She just kept the tips of her fingers on the hand-rail, and floated gently down without even touching the stairs with her feet; then she floated on through the hall, and would have gone straight out at the door in the same way, if she hadn’t caught hold of the door-post. She was getting a little giddy with so much floating in the air, and was rather glad to find herself walking again in the natural way.",
        className: "chapter_text"
      }
    ]),
    2: createChapter("The Garden of Live Flowers", "II", "https://placehold.co/25", [
      {
        text: "“I should see the garden far better,” said Alice to herself, “if I could get to the top of that hill: and here’s a path that leads straight to it—at least, no, it doesn’t do that—” (after going a few yards along the path, and turning several sharp corners), “but I suppose it will at last. But how curiously it twists! It’s more like a corkscrew than a path! Well, <i>this</i> turn goes to the hill, I suppose—no, it doesn’t! This goes straight back to the house! Well then, I’ll try it the other way.”",
        className: "chapter_text"
      },{
        text: "And so she did: wandering up and down, and trying turn after turn, but always coming back to the house, do what she would. Indeed, once, when she turned a corner rather more quickly than usual, she ran against it before she could stop herself.",
        className: "chapter_text"
      },{
        text: "“It’s no use talking about it,” Alice said, looking up at the house and pretending it was arguing with her. “I’m <i>not</i> going in again yet. I know I should have to get through the Looking-glass again—back into the old room—and there’d be an end of all my adventures!”",
        className: "chapter_text"
      },{
        text: "So, resolutely turning her back upon the house, she set out once more down the path, determined to keep straight on till she got to the hill. For a few minutes all went on well, and she was just saying, “I really shall do it this time—” when the path gave a sudden twist and shook itself (as she described it afterwards), and the next moment she found herself actually walking in at the door.",
        className: "chapter_text"
      },{
        text: "“Oh, it’s too bad!” she cried. “I never saw such a house for getting in the way! Never!”",
        className: "chapter_text"
      },{
        text: "However, there was the hill full in sight, so there was nothing to be done but start again. This time she came upon a large flower-bed, with a border of daisies, and a willow-tree growing in the middle.",
        className: "chapter_text"
      },{
        text: "“O Tiger-lily,” said Alice, addressing herself to one that was waving gracefully about in the wind, “I wish you could talk!”",
        className: "chapter_text"
      },{
        text: "“We <i>can</i> talk,” said the Tiger-lily: “when there’s anybody worth talking to.”",
        className: "chapter_text"
      },{
        text: "Alice was so astonished that she could not speak for a minute: it quite seemed to take her breath away. At length, as the Tiger-lily only went on waving about, she spoke again, in a timid voice—almost in a whisper. “And can <i>all</i> the flowers talk?”",
        className: "chapter_text"
      },{
        text: "“As well as <i>you</i> can,” said the Tiger-lily. “And a great deal louder.”",
        className: "chapter_text"
      },{
        text: "“It isn’t manners for us to begin, you know,” said the Rose, “and I really was wondering when you’d speak! Said I to myself, ‘Her face has got <i>some</i> sense in it, though it’s not a clever one!’ Still, you’re the right colour, and that goes a long way.”",
        className: "chapter_text"
      },{
        text: "“I don’t care about the colour,” the Tiger-lily remarked. “If only her petals curled up a little more, she’d be all right.”",
        className: "chapter_text"
      },{
        text: "Alice didn’t like being criticised, so she began asking questions. “Aren’t you sometimes frightened at being planted out here, with nobody to take care of you?”",
        className: "chapter_text"
      },{
        text: "“There’s the tree in the middle,” said the Rose: “what else is it good for?”",
        className: "chapter_text"
      },{
        text: "“But what could it do, if any danger came?” Alice asked.",
        className: "chapter_text"
      },{
        text: "“It says ‘Bough-wough!’” cried a Daisy: “that’s why its branches are called boughs!”",
        className: "chapter_text"
      },{
        text: "“Didn’t you know <i>that</i>?” cried another Daisy, and here they all began shouting together, till the air seemed quite full of little shrill voices. “Silence, every one of you!” cried the Tiger-lily, waving itself passionately from side to side, and trembling with excitement. “They know I can’t get at them!” it panted, bending its quivering head towards Alice, “or they wouldn’t dare to do it!”",
        className: "chapter_text"
      },{
        text: "“Never mind!” Alice said in a soothing tone, and stooping down to the daisies, who were just beginning again, she whispered, “If you don’t hold your tongues, I’ll pick you!”",
        className: "chapter_text"
      },{
        text: "There was silence in a moment, and several of the pink daisies turned white.",
        className: "chapter_text"
      },{
        text: "“That’s right!” said the Tiger-lily. “The daisies are worst of all. When one speaks, they all begin together, and it’s enough to make one wither to hear the way they go on!”",
        className: "chapter_text"
      },{
        text: "“How is it you can all talk so nicely?” Alice said, hoping to get it into a better temper by a compliment. “I’ve been in many gardens before, but none of the flowers could talk.”",
        className: "chapter_text"
      },{
        text: "“Put your hand down, and feel the ground,” said the Tiger-lily. “Then you’ll know why.”",
        className: "chapter_text"
      },{
        text: "Alice did so. “It’s very hard,” she said, “but I don’t see what that has to do with it.”",
        className: "chapter_text"
      },{
        text: "“In most gardens,” the Tiger-lily said, “they make the beds too soft—so that the flowers are always asleep.”",
        className: "chapter_text"
      },{
        text: "This sounded a very good reason, and Alice was quite pleased to know it. “I never thought of that before!” she said.",
        className: "chapter_text"
      },{
        text: "“It’s <i>my</i> opinion that you never think <i>at all</i>,” the Rose said in a rather severe tone.",
        className: "chapter_text"
      },{
        text: "“I never saw anybody that looked stupider,” a Violet said, so suddenly, that Alice quite jumped; for it hadn’t spoken before.",
        className: "chapter_text"
      },{
        text: "“Hold <i>your</i> tongue!” cried the Tiger-lily. “As if <i>you</i> ever saw anybody! You keep your head under the leaves, and snore away there, till you know no more what’s going on in the world, than if you were a bud!”",
        className: "chapter_text"
      },{
        text: "“Are there any more people in the garden besides me?” Alice said, not choosing to notice the Rose’s last remark.",
        className: "chapter_text"
      },{
        text: "“There’s one other flower in the garden that can move about like you,” said the Rose. “I wonder how you do it—” (“You’re always wondering,” said the Tiger-lily), “but she’s more bushy than you are.”",
        className: "chapter_text"
      },{
        text: "“Is she like me?” Alice asked eagerly, for the thought crossed her mind, “There’s another little girl in the garden, somewhere!”",
        className: "chapter_text"
      },{
        text: "“Well, she has the same awkward shape as you,” the Rose said, “but she’s redder—and her petals are shorter, I think.”",
        className: "chapter_text"
      },{
        text: "“Her petals are done up close, almost like a dahlia,” the Tiger-lily interrupted: “not tumbled about anyhow, like yours.”",
        className: "chapter_text"
      },{
        text: "“But that’s not <i>your</i> fault,” the Rose added kindly: “you’re beginning to fade, you know—and then one can’t help one’s petals getting a little untidy.”",
        className: "chapter_text"
      },{
        text: "Alice didn’t like this idea at all: so, to change the subject, she asked “Does she ever come out here?”",
        className: "chapter_text"
      },{
        text: "“I daresay you’ll see her soon,” said the Rose. “She’s one of the thorny kind.”",
        className: "chapter_text"
      },{
        text: "“Where does she wear the thorns?” Alice asked with some curiosity.",
        className: "chapter_text"
      },{
        text: "“Why all round her head, of course,” the Rose replied. “I was wondering <i>you</i> hadn’t got some too. I thought it was the regular rule.”",
        className: "chapter_text"
      },{
        text: "“She’s coming!” cried the Larkspur. “I hear her footstep, thump, thump, thump, along the gravel-walk!”",
        className: "chapter_text"
      },{
        text: "Alice looked round eagerly, and found that it was the Red Queen. “She’s grown a good deal!” was her first remark. She had indeed: when Alice first found her in the ashes, she had been only three inches high—and here she was, half a head taller than Alice herself!",
        className: "chapter_text"
      },{
        text: "“It’s the fresh air that does it,” said the Rose: “wonderfully fine air it is, out here.”",
        className: "chapter_text"
      },{
        text: "“I think I’ll go and meet her,” said Alice, for, though the flowers were interesting enough, she felt that it would be far grander to have a talk with a real Queen.",
        className: "chapter_text"
      },{
        text: "“You can’t possibly do that,” said the Rose: “<i>I</i> should advise you to walk the other way.”",
        className: "chapter_text"
      },{
        text: "This sounded nonsense to Alice, so she said nothing, but set off at once towards the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.",
        className: "chapter_text"
      },{
        text: "A little provoked, she drew back, and after looking everywhere for the queen (whom she spied out at last, a long way off), she thought she would try the plan, this time, of walking in the opposite direction.",
        className: "chapter_text"
      },{
        text: "It succeeded beautifully. She had not been walking a minute before she found herself face to face with the Red Queen, and full in sight of the hill she had been so long aiming at.",
        className: "chapter_text"
      },{
        text: "“Where do you come from?” said the Red Queen. “And where are you going? Look up, speak nicely, and don’t twiddle your fingers all the time.”",
        className: "chapter_text"
      },{
        text: "Alice attended to all these directions, and explained, as well as she could, that she had lost her way.",
        className: "chapter_text"
      },{
        text: "“I don’t know what you mean by <i>your</i> way,” said the Queen: “all the ways about here belong to <i>me</i>—but why did you come out here at all?” she added in a kinder tone. “Curtsey while you’re thinking what to say, it saves time.”",
        className: "chapter_text"
      },{
        text: "Alice wondered a little at this, but she was too much in awe of the Queen to disbelieve it. “I’ll try it when I go home,” she thought to herself, “the next time I’m a little late for dinner.”",
        className: "chapter_text"
      },{
        text: "“It’s time for you to answer now,” the Queen said, looking at her watch: “open your mouth a <i>little</i> wider when you speak, and always say ‘your Majesty.’”",
        className: "chapter_text"
      },{
        text: "“I only wanted to see what the garden was like, your Majesty—”",
        className: "chapter_text"
      },{
        text: "“That’s right,” said the Queen, patting her on the head, which Alice didn’t like at all, “though, when you say ‘garden,’—<i>I’ve</i> seen gardens, compared with which this would be a wilderness.”",
        className: "chapter_text"
      },{
        text: "Alice didn’t dare to argue the point, but went on: “—and I thought I’d try and find my way to the top of that hill—”",
        className: "chapter_text"
      },{
        text: "“When you say ‘hill,’” the Queen interrupted, “<i>I</i> could show you hills, in comparison with which you’d call that a valley.”",
        className: "chapter_text"
      },{
        text: "“No, I shouldn’t,” said Alice, surprised into contradicting her at last: “a hill <i>can’t</i> be a valley, you know. That would be nonsense—”",
        className: "chapter_text"
      },{
        text: "The Red Queen shook her head, “You may call it ‘nonsense’ if you like,” she said, “but <i>I’ve</i> heard nonsense, compared with which that would be as sensible as a dictionary!”",
        className: "chapter_text"
      },{
        text: "Alice curtseyed again, as she was afraid from the Queen’s tone that she was a <i>little</i> offended: and they walked on in silence till they got to the top of the little hill.",
        className: "chapter_text"
      },{
        text: "For some minutes Alice stood without speaking, looking out in all directions over the country—and a most curious country it was. There were a number of tiny little brooks running straight across it from side to side, and the ground between was divided up into squares by a number of little green hedges, that reached from brook to brook.",
        className: "chapter_text"
      },{
        text: "“I declare it’s marked out just like a large chessboard!” Alice said at last. “There ought to be some men moving about somewhere—and so there are!” She added in a tone of delight, and her heart began to beat quick with excitement as she went on. “It’s a great huge game of chess that’s being played—all over the world—if this is the world at all, you know. Oh, what fun it is! How I <i>wish</i> I was one of them! I wouldn’t mind being a Pawn, if only I might join—though of course I should <i>like</i> to be a Queen, best.”",
        className: "chapter_text"
      },{
        text: "She glanced rather shyly at the real Queen as she said this, but her companion only smiled pleasantly, and said, “That’s easily managed. You can be the White Queen’s Pawn, if you like, as Lily’s too young to play; and you’re in the Second Square to begin with: when you get to the Eighth Square you’ll be a Queen—” Just at this moment, somehow or other, they began to run.",
        className: "chapter_text"
      },{
        text: "Alice never could quite make out, in thinking it over afterwards, how it was that they began: all she remembers is, that they were running hand in hand, and the Queen went so fast that it was all she could do to keep up with her: and still the Queen kept crying “Faster! Faster!” but Alice felt she <i>could not</i> go faster, though she had not breath left to say so.",
        className: "chapter_text"
      },{
        text: "The most curious part of the thing was, that the trees and the other things round them never changed their places at all: however fast they went, they never seemed to pass anything. “I wonder if all the things move along with us?” thought poor puzzled Alice. And the Queen seemed to guess her thoughts, for she cried, “Faster! Don’t try to talk!”",
        className: "chapter_text"
      },{
        text: "Not that Alice had any idea of doing <i>that</i>. She felt as if she would never be able to talk again, she was getting so much out of breath: and still the Queen cried “Faster! Faster!” and dragged her along. “Are we nearly there?” Alice managed to pant out at last.",
        className: "chapter_text"
      },{
        text: "“Nearly there!” the Queen repeated. “Why, we passed it ten minutes ago! Faster!” And they ran on for a time in silence, with the wind whistling in Alice’s ears, and almost blowing her hair off her head, she fancied.",
        className: "chapter_text"
      },{
        text: "“Now! Now!” cried the Queen. “Faster! Faster!” And they went so fast that at last they seemed to skim through the air, hardly touching the ground with their feet, till suddenly, just as Alice was getting quite exhausted, they stopped, and she found herself sitting on the ground, breathless and giddy.",
        className: "chapter_text"
      },{
        text: "The Queen propped her up against a tree, and said kindly, “You may rest a little now.”",
        className: "chapter_text"
      },{
        text: "Alice looked round her in great surprise. “Why, I do believe we’ve been under this tree the whole time! Everything’s just as it was!”",
        className: "chapter_text"
      },{
        text: "“Of course it is,” said the Queen, “what would you have it?”",
        className: "chapter_text"
      },{
        text: "“Well, in <i>our</i> country,” said Alice, still panting a little, “you’d generally get to somewhere else—if you ran very fast for a long time, as we’ve been doing.”",
        className: "chapter_text"
      },{
        text: "“A slow sort of country!” said the Queen. “Now, <i>here</i>, you see, it takes all the running <i>you can do, to keep in the same place. If you want to get somewhere else, you must run at least twice as fast as that!”",
        className: "chapter_text"
      },{
        text: "“I’d rather not try, please!” said Alice. “I’m quite content to stay here—only I <i>am</i> so hot and thirsty!”",
        className: "chapter_text"
      },{
        text: "“I know what <i>you’d</i> like!” the Queen said good-naturedly, taking a little box out of her pocket. “Have a biscuit?”",
        className: "chapter_text"
      },{
        text: "Alice thought it would not be civil to say “No,” though it wasn’t at all what she wanted. So she took it, and ate it as well as she could: and it was <i>very</i> dry; and she thought she had never been so nearly choked in all her life.",
        className: "chapter_text"
      },{
        text: "“While you’re refreshing yourself,” said the Queen, “I’ll just take the measurements.” And she took a ribbon out of her pocket, marked in inches, and began measuring the ground, and sticking little pegs in here and there.",
        className: "chapter_text"
      },{
        text: "“At the end of two yards,” she said, putting in a peg to mark the distance, “I shall give you your directions—have another biscuit?”",
        className: "chapter_text"
      },{
        text: "“No, thank you,” said Alice: “one’s <i>quite</i> enough!”",
        className: "chapter_text"
      },{
        text: "“Thirst quenched, I hope?” said the Queen.",
        className: "chapter_text"
      },{
        text: "Alice did not know what to say to this, but luckily the Queen did not wait for an answer, but went on. “At the end of <i>three</i> yards I shall repeat them—for fear of your forgetting them. At the end of <i>four</i>, I shall say good-bye. And at the end of five, I shall go!”",
        className: "chapter_text"
      },{
        text: "She had got all the pegs put in by this time, and Alice looked on with great interest as she returned to the tree, and then began slowly walking down the row.",
        className: "chapter_text"
      },{
        text: "At the two-yard peg she faced round, and said, “A pawn goes two squares in its first move, you know. So you’ll go very quickly through the Third Square—by railway, I should think—and you’ll find yourself in the Fourth Square in no time. Well, <i>that</i> square belongs to Tweedledum and Tweedledee—the Fifth is mostly water—the Sixth belongs to Humpty Dumpty—But you make no remark?”",
        className: "chapter_text"
      },{
        text: "“I—I didn’t know I had to make one—just then,” Alice faltered out.",
        className: "chapter_text"
      },{
        text: "“You <i>should</i> have said, ‘It’s extremely kind of you to tell me all this’—however, we’ll suppose it said—the Seventh Square is all forest—however, one of the Knights will show you the way—and in the Eighth Square we shall be Queens together, and it’s all feasting and fun!” Alice got up and curtseyed, and sat down again.",
        className: "chapter_text"
      },{
        text: "At the next peg the Queen turned again, and this time she said, “Speak in French when you can’t think of the English for a thing—turn out your toes as you walk—and remember who you are!” She did not wait for Alice to curtsey this time, but walked on quickly to the next peg, where she turned for a moment to say “good-bye,” and then hurried on to the last.",
        className: "chapter_text"
      },{
        text: "How it happened, Alice never knew, but exactly as she came to the last peg, she was gone. Whether she vanished into the air, or whether she ran quickly into the wood (“and she can run very fast!” thought Alice), there was no way of guessing, but she was gone, and Alice began to remember that she was a Pawn, and that it would soon be time for her to move.",
        className: "chapter_text"
      }
    ]),

    3: createChapter("Looking-Glass Insects", "III", "https://placehold.co/25", [
      {
        text: "Of course the first thing to do was to make a grand survey of the country she was going to travel through. “It’s something very like learning geography,” thought Alice, as she stood on tiptoe in hopes of being able to see a little further. “Principal rivers—there <i>are</i> none. Principal mountains—I’m on the only one, but I don’t think it’s got any name. Principal towns—why, what <i>are</i> those creatures, making honey down there? They can’t be bees—nobody ever saw bees a mile off, you know—” and for some time she stood silent, watching one of them that was bustling about among the flowers, poking its proboscis into them, “just as if it was a regular bee,” thought Alice.",
        className: "chapter_text"
      },{
        text: "However, this was anything but a regular bee: in fact it was an elephant—as Alice soon found out, though the idea quite took her breath away at first. “And what enormous flowers they must be!” was her next idea. “Something like cottages with the roofs taken off, and stalks put to them—and what quantities of honey they must make! I think I’ll go down and—no, I won’t just yet,” she went on, checking herself just as she was beginning to run down the hill, and trying to find some excuse for turning shy so suddenly. “It’ll never do to go down among them without a good long branch to brush them away—and what fun it’ll be when they ask me how I like my walk. I shall say—‘Oh, I like it well enough—’” (here came the favourite little toss of the head), “‘only it was so dusty and hot, and the elephants did tease so!’”",
        className: "chapter_text"
      },{
        text: "“I think I’ll go down the other way,” she said after a pause: “and perhaps I may visit the elephants later on. Besides, I do so want to get into the Third Square!”",
        className: "chapter_text"
      },{
        text: "So with this excuse she ran down the hill and jumped over the first of the six little brooks.",
        className: "chapter_text"
      },{
        text: "* * *",
        className: "chapter_text_space"
      },{
        text: "“Tickets, please!” said the Guard, putting his head in at the window. In a moment everybody was holding out a ticket: they were about the same size as the people, and quite seemed to fill the carriage.",
        className: "chapter_text"
      },{
        text: "“Now then! Show your ticket, child!” the Guard went on, looking angrily at Alice. And a great many voices all said together (“like the chorus of a song,” thought Alice), “Don’t keep him waiting, child! Why, his time is worth a thousand pounds a minute!”",
        className: "chapter_text"
      },{
        text: "“I’m afraid I haven’t got one,” Alice said in a frightened tone: “there wasn’t a ticket-office where I came from.” And again the chorus of voices went on. “There wasn’t room for one where she came from. The land there is worth a thousand pounds an inch!”",
        className: "chapter_text"
      },{
        text: "“Don’t make excuses,” said the Guard: “you should have bought one from the engine-driver.” And once more the chorus of voices went on with “The man that drives the engine. Why, the smoke alone is worth a thousand pounds a puff!”",
        className: "chapter_text"
      },{
        text: "Alice thought to herself, “Then there’s no use in speaking.” The voices didn’t join in this time, as she hadn’t spoken, but to her great surprise, they all <i>thought</i> in chorus (I hope you understand what <i>thinking</i> in chorus means—for I must confess that I don’t), “Better say nothing at all. Language is worth a thousand pounds a word!”",
        className: "chapter_text"
      },{
        text: "“I shall dream about a thousand pounds tonight, I know I shall!” thought Alice.",
        className: "chapter_text"
      },{
        text: "All this time the Guard was looking at her, first through a telescope, then through a microscope, and then through an opera-glass. At last he said, “You’re travelling the wrong way,” and shut up the window and went away.",
        className: "chapter_text"
      },{
        text: "“So young a child,” said the gentleman sitting opposite to her (he was dressed in white paper), “ought to know which way she’s going, even if she doesn’t know her own name!”",
        className: "chapter_text"
      },{
        text: "A Goat, that was sitting next to the gentleman in white, shut his eyes and said in a loud voice, “She ought to know her way to the ticket-office, even if she doesn’t know her alphabet!”",
        className: "chapter_text"
      },{
        text: "There was a Beetle sitting next to the Goat (it was a very queer carriage-full of passengers altogether), and, as the rule seemed to be that they should all speak in turn, <i>he</i> went on with “She’ll have to go back from here as luggage!”",
        className: "chapter_text"
      },{
        text: "Alice couldn’t see who was sitting beyond the Beetle, but a hoarse voice spoke next. “Change engines—” it said, and was obliged to leave off.",
        className: "chapter_text"
      },{
        text: "“It sounds like a horse,” Alice thought to herself. And an extremely small voice, close to her ear, said, “You might make a joke on that—something about ‘horse’ and ‘hoarse,’ you know.”",
        className: "chapter_text"
      },{
        text: "Then a very gentle voice in the distance said, “She must be labelled ‘Lass, with care,’ you know—”",
        className: "chapter_text"
      },{
        text: "And after that other voices went on (“What a number of people there are in the carriage!” thought Alice), saying, “She must go by post, as she’s got a head on her—” “She must be sent as a message by the telegraph—” “She must draw the train herself the rest of the way—” and so on.",
        className: "chapter_text"
      },{
        text: "But the gentleman dressed in white paper leaned forwards and whispered in her ear, “Never mind what they all say, my dear, but take a return-ticket every time the train stops.”",
        className: "chapter_text"
      },{
        text: "“Indeed I shan’t!” Alice said rather impatiently. “I don’t belong to this railway journey at all—I was in a wood just now—and I wish I could get back there.”",
        className: "chapter_text"
      },{
        text: "“You might make a joke on <i>that</i>,” said the little voice close to her ear: “something about ‘you <i>would</i> if you could,’ you know.”",
        className: "chapter_text"
      },{
        text: "“Don’t tease so,” said Alice, looking about in vain to see where the voice came from; “if you’re so anxious to have a joke made, why don’t you make one yourself?”",
        className: "chapter_text"
      },{
        text: "The little voice sighed deeply: it was very unhappy, evidently, and Alice would have said something pitying to comfort it, “If it would only sigh like other people!” she thought. But this was such a wonderfully small sigh, that she wouldn’t have heard it at all, if it hadn’t come <i>quite</i> close to her ear. The consequence of this was that it tickled her ear very much, and quite took off her thoughts from the unhappiness of the poor little creature.",
        className: "chapter_text"
      },{
        text: "“I know you are a friend,” the little voice went on; “a dear friend, and an old friend. And you won’t hurt me, though I <i>am</i> an insect.”",
        className: "chapter_text"
      },{
        text: "“What kind of insect?” Alice inquired a little anxiously. What she really wanted to know was, whether it could sting or not, but she thought this wouldn’t be quite a civil question to ask.",
        className: "chapter_text"
      },{
        text: "“What, then you don’t—” the little voice began, when it was drowned by a shrill scream from the engine, and everybody jumped up in alarm, Alice among the rest.",
        className: "chapter_text"
      },{
        text: "The Horse, who had put his head out of the window, quietly drew it in and said, “It’s only a brook we have to jump over.” Everybody seemed satisfied with this, though Alice felt a little nervous at the idea of trains jumping at all. “However, it’ll take us into the Fourth Square, that’s some comfort!” she said to herself. In another moment she felt the carriage rise straight up into the air, and in her fright she caught at the thing nearest to her hand, which happened to be the Goat’s beard.",
        className: "chapter_text"
      },{
        text: "* * *",
        className: "chapter_text_space"
      },{
        text: "But the beard seemed to melt away as she touched it, and she found herself sitting quietly under a tree—while the Gnat (for that was the insect she had been talking to) was balancing itself on a twig just over her head, and fanning her with its wings.",
        className: "chapter_text"
      },{
        text: "It certainly was a <i>very</i> large Gnat: “about the size of a chicken,” Alice thought. Still, she couldn’t feel nervous with it, after they had been talking together so long.",
        className: "chapter_text"
      },{
        text: "“—then you don’t like all insects?” the Gnat went on, as quietly as if nothing had happened.",
        className: "chapter_text"
      },{
        text: "“I like them when they can talk,” Alice said. “None of them ever talk, where I come from.”",
        className: "chapter_text"
      },{
        text: "“What sort of insects do you rejoice in, where you come from?” the Gnat inquired.",
        className: "chapter_text"
      },{
        text: "“I don’t <i>rejoice</i> in insects at all,” Alice explained, “because I’m rather afraid of them—at least the large kinds. But I can tell you the names of some of them.”",
        className: "chapter_text"
      },{
        text: "“Of course they answer to their names?” the Gnat remarked carelessly.",
        className: "chapter_text"
      },{
        text: "“I never knew them to do it.”",
        className: "chapter_text"
      },{
        text: "“What’s the use of their having names,” the Gnat said, “if they won’t answer to them?”",
        className: "chapter_text"
      },{
        text: "“No use to <i>them</i>,” said Alice; “but it’s useful to the people who name them, I suppose. If not, why do things have names at all?”",
        className: "chapter_text"
      },{
        text: "“I can’t say,” the Gnat replied. “Further on, in the wood down there, they’ve got no names—however, go on with your list of insects: you’re wasting time.”",
        className: "chapter_text"
      },{
        text: "“Well, there’s the Horse-fly,” Alice began, counting off the names on her fingers.",
        className: "chapter_text"
      },{
        text: "“All right,” said the Gnat: “half way up that bush, you’ll see a Rocking-horse-fly, if you look. It’s made entirely of wood, and gets about by swinging itself from branch to branch.”",
        className: "chapter_text"
      },{
        text: "“What does it live on?” Alice asked, with great curiosity.",
        className: "chapter_text"
      },{
        text: "“Sap and sawdust,” said the Gnat. “Go on with the list.”",
        className: "chapter_text"
      },{
        text: "Alice looked up at the Rocking-horse-fly with great interest, and made up her mind that it must have been just repainted, it looked so bright and sticky; and then she went on.",
        className: "chapter_text"
      },{
        text: "“And there’s the Dragon-fly.”",
        className: "chapter_text"
      },{
        text: "“Look on the branch above your head,” said the Gnat, “and there you’ll find a snap-dragon-fly. Its body is made of plum-pudding, its wings of holly-leaves, and its head is a raisin burning in brandy.”",
        className: "chapter_text"
      },{
        text: "“And what does it live on?”",
        className: "chapter_text"
      },{
        text: "“Frumenty and mince pie,” the Gnat replied; “and it makes its nest in a Christmas box.”",
        className: "chapter_text"
      },{
        text: "“And then there’s the Butterfly,” Alice went on, after she had taken a good look at the insect with its head on fire, and had thought to herself, “I wonder if that’s the reason insects are so fond of flying into candles—because they want to turn into Snap-dragon-flies!”",
        className: "chapter_text"
      },{
        text: "“Crawling at your feet,” said the Gnat (Alice drew her feet back in some alarm), “you may observe a Bread-and-Butterfly. Its wings are thin slices of Bread-and-butter, its body is a crust, and its head is a lump of sugar.”",
        className: "chapter_text"
      },{
        text: "“And what does <i>it</i> live on?”",
        className: "chapter_text"
      },{
        text: "“Weak tea with cream in it.”",
        className: "chapter_text"
      },{
        text: "A new difficulty came into Alice’s head. “Supposing it couldn’t find any?” she suggested.",
        className: "chapter_text"
      },{
        text: "“Then it would die, of course.”",
        className: "chapter_text"
      },{
        text: "“But that must happen very often,” Alice remarked thoughtfully.",
        className: "chapter_text"
      },{
        text: "“It always happens,” said the Gnat.",
        className: "chapter_text"
      },{
        text: "After this, Alice was silent for a minute or two, pondering. The Gnat amused itself meanwhile by humming round and round her head: at last it settled again and remarked, “I suppose you don’t want to lose your name?”",
        className: "chapter_text"
      },{
        text: "“No, indeed,” Alice said, a little anxiously.",
        className: "chapter_text"
      },{
        text: "“And yet I don’t know,” the Gnat went on in a careless tone: “only think how convenient it would be if you could manage to go home without it! For instance, if the governess wanted to call you to your lessons, she would call out ‘come here—,’ and there she would have to leave off, because there wouldn’t be any name for her to call, and of course you wouldn’t have to go, you know.”",
        className: "chapter_text"
      },{
        text: "“That would never do, I’m sure,” said Alice: “the governess would never think of excusing me lessons for that. If she couldn’t remember my name, she’d call me ‘Miss!’ as the servants do.”",
        className: "chapter_text"
      },{
        text: "“Well, if she said ‘Miss,’ and didn’t say anything more,” the Gnat remarked, “of course you’d miss your lessons. That’s a joke. I wish <i>you</i> had made it.”",
        className: "chapter_text"
      },{
        text: "“Why do you wish <i>I</i> had made it?” Alice asked. “It’s a very bad one.”",
        className: "chapter_text"
      },{
        text: "But the Gnat only sighed deeply, while two large tears came rolling down its cheeks.",
        className: "chapter_text"
      },{
        text: "“You shouldn’t make jokes,” Alice said, “if it makes you so unhappy.”",
        className: "chapter_text"
      },{
        text: "Then came another of those melancholy little sighs, and this time the poor Gnat really seemed to have sighed itself away, for, when Alice looked up, there was nothing whatever to be seen on the twig, and, as she was getting quite chilly with sitting still so long, she got up and walked on.",
        className: "chapter_text"
      },{
        text: "She very soon came to an open field, with a wood on the other side of it: it looked much darker than the last wood, and Alice felt a little timid about going into it. However, on second thoughts, she made up her mind to go on: “for I certainly won’t go back,” she thought to herself, and this was the only way to the Eighth Square.",
        className: "chapter_text"
      },{
        text: "“This must be the wood,” she said thoughtfully to herself, “where things have no names. I wonder what’ll become of my name when I go in? I shouldn’t like to lose it at all—because they’d have to give me another, and it would be almost certain to be an ugly one. But then the fun would be trying to find the creature that had got my old name! That’s just like the advertisements, you know, when people lose dogs—‘<i>answers to the name of “Dash:” had on a brass collar</i>’—just fancy calling everything you met ‘Alice,’ till one of them answered! Only they wouldn’t answer at all, if they were wise.”",
        className: "chapter_text"
      },{
        text: "She was rambling on in this way when she reached the wood: it looked very cool and shady. “Well, at any rate it’s a great comfort,” she said as she stepped under the trees, “after being so hot, to get into the—into what?” she went on, rather surprised at not being able to think of the word. “I mean to get under the—under the—under this, you know!” putting her hand on the trunk of the tree. “What does it call itself, I wonder? I do believe it’s got no name—why, to be sure it hasn’t!”",
        className: "chapter_text"
      },{
        text: "She stood silent for a minute, thinking: then she suddenly began again. “Then it really <i>has</i> happened, after all! And now, who am I? I <i>will</i> remember, if I can! I’m determined to do it!” But being determined didn’t help much, and all she could say, after a great deal of puzzling, was, “L, I <i>know</i> it begins with L!”",
        className: "chapter_text"
      },{
        text: "Just then a Fawn came wandering by: it looked at Alice with its large gentle eyes, but didn’t seem at all frightened. “Here then! Here then!” Alice said, as she held out her hand and tried to stroke it; but it only started back a little, and then stood looking at her again.",
        className: "chapter_text"
      },{
        text: "“What do you call yourself?” the Fawn said at last. Such a soft sweet voice it had!",
        className: "chapter_text"
      },{
        text: "“I wish I knew!” thought poor Alice. She answered, rather sadly, “Nothing, just now.”",
        className: "chapter_text"
      },{
        text: "“Think again,” it said: “that won’t do.”",
        className: "chapter_text"
      },{
        text: "Alice thought, but nothing came of it. “Please, would you tell me what you call yourself?” she said timidly. “I think that might help a little.”",
        className: "chapter_text"
      },{
        text: "“I’ll tell you, if you’ll move a little further on,” the Fawn said. “I can’t remember here.”",
        className: "chapter_text"
      },{
        text: "So they walked on together though the wood, Alice with her arms clasped lovingly round the soft neck of the Fawn, till they came out into another open field, and here the Fawn gave a sudden bound into the air, and shook itself free from Alice’s arms. “I’m a Fawn!” it cried out in a voice of delight, “and, dear me! you’re a human child!” A sudden look of alarm came into its beautiful brown eyes, and in another moment it had darted away at full speed.",
        className: "chapter_text"
      },{
        text: "Alice stood looking after it, almost ready to cry with vexation at having lost her dear little fellow-traveller so suddenly. “However, I know my name now.” she said, “that’s some comfort. Alice—Alice—I won’t forget it again. And now, which of these finger-posts ought I to follow, I wonder?”",
        className: "chapter_text"
      },{
        text: "It was not a very difficult question to answer, as there was only one road through the wood, and the two finger-posts both pointed along it. “I’ll settle it,” Alice said to herself, “when the road divides and they point different ways.”",
        className: "chapter_text"
      },{
        text: "But this did not seem likely to happen. She went on and on, a long way, but wherever the road divided there were sure to be two finger-posts pointing the same way, one marked “TO TWEEDLEDUM’S HOUSE” and the other “TO THE HOUSE OF TWEEDLEDEE.”",
        className: "chapter_text"
      },{
        text: "“I do believe,” said Alice at last, “that they live in the same house! I wonder I never thought of that before—But I can’t stay there long. I’ll just call and say ‘how d’you do?’ and ask them the way out of the wood. If I could only get to the Eighth Square before it gets dark!” So she wandered on, talking to herself as she went, till, on turning a sharp corner, she came upon two fat little men, so suddenly that she could not help starting back, but in another moment she recovered herself, feeling sure that they must be.",
        className: "chapter_text"
      }
    ]),
    4: createChapter("Tweedledum and Tweedledee", "IV", "https://placehold.co/25", [
      {
        text: "They were standing under a tree, each with an arm round the other’s neck, and Alice knew which was which in a moment, because one of them had “DUM” embroidered on his collar, and the other “DEE.” “I suppose they’ve each got ‘TWEEDLE’ round at the back of the collar,” she said to herself.",
        className: "chapter_text"
      },{
        text: "They stood so still that she quite forgot they were alive, and she was just looking round to see if the word ‘TWEEDLE’ was written at the back of each collar, when she was startled by a voice coming from the one marked “DUM.”",
        className: "chapter_text"
      },{
        text: "“If you think we’re wax-works,” he said, “you ought to pay, you know. Wax-works weren’t made to be looked at for nothing, nohow!”",
        className: "chapter_text"
      },{
        text: "“Contrariwise,” added the one marked “DEE,” “if you think we’re alive, you ought to speak.”",
        className: "chapter_text"
      },{
        text: "“I’m sure I’m very sorry,” was all Alice could say; for the words of the old song kept ringing through her head like the ticking of a clock, and she could hardly help saying them out loud:—",
        className: "chapter_text"
      },{
        text: "“Tweedledum and Tweedledee</br>Agreed to have a battle;</br>For Tweedledum said Tweedledee</br>Had spoiled his nice new rattle.",
        className: "chapter_text_cit"
      },{
        text: "Just then flew down a monstrous crow,</br>As black as a tar-barrel;</br>Which frightened both the heroes so,</br>They quite forgot their quarrel.”",
        className: "chapter_text_cit"
      },{
        text: "“I know what you’re thinking about,” said Tweedledum: “but it isn’t so, nohow.”",
        className: "chapter_text"
      },{
        text: "“Contrariwise,” continued Tweedledee, “if it was so, it might be; and if it were so, it would be; but as it isn’t, it ain’t. That’s logic.”",
        className: "chapter_text"
      },{
        text: "“I was thinking,” Alice said very politely, “which is the best way out of this wood: it’s getting so dark. Would you tell me, please?”",
        className: "chapter_text"
      },{
        text: "But the little men only looked at each other and grinned.",
        className: "chapter_text"
      },{
        text: "They looked so exactly like a couple of great schoolboys, that Alice couldn’t help pointing her finger at Tweedledum, and saying “First Boy!”",
        className: "chapter_text"
      },{
        text: "“Nohow!” Tweedledum cried out briskly, and shut his mouth up again with a snap.",
        className: "chapter_text"
      },{
        text: "“Next Boy!” said Alice, passing on to Tweedledee, though she felt quite certain he would only shout out “Contrariwise!” and so he did.",
        className: "chapter_text"
      },{
        text: "“You’ve been wrong!” cried Tweedledum. “The first thing in a visit is to say ‘How d’ye do?’ and shake hands!” And here the two brothers gave each other a hug, and then they held out the two hands that were free, to shake hands with her.",
        className: "chapter_text"
      },{
        text: "Alice did not like shaking hands with either of them first, for fear of hurting the other one’s feelings; so, as the best way out of the difficulty, she took hold of both hands at once: the next moment they were dancing round in a ring. This seemed quite natural (she remembered afterwards), and she was not even surprised to hear music playing: it seemed to come from the tree under which they were dancing, and it was done (as well as she could make it out) by the branches rubbing one across the other, like fiddles and fiddle-sticks.",
        className: "chapter_text"
      },{
        text: "“But it certainly was funny,” (Alice said afterwards, when she was telling her sister the history of all this,) “to find myself singing ‘<i>Here we go round the mulberry bush</i>.’ I don’t know when I began it, but somehow I felt as if I’d been singing it a long long time!”",
        className: "chapter_text"
      },{
        text: "The other two dancers were fat, and very soon out of breath. “Four times round is enough for one dance,” Tweedledum panted out, and they left off dancing as suddenly as they had begun: the music stopped at the same moment.",
        className: "chapter_text"
      },{
        text: "Then they let go of Alice’s hands, and stood looking at her for a minute: there was a rather awkward pause, as Alice didn’t know how to begin a conversation with people she had just been dancing with. “It would never do to say ‘How d’ye do?’ <i>now</i>,” she said to herself: “we seem to have got beyond that, somehow!”",
        className: "chapter_text"
      },{
        text: "“I hope you’re not much tired?” she said at last.",
        className: "chapter_text"
      },{
        text: "“Nohow. And thank you very much for asking,” said Tweedledum.",
        className: "chapter_text"
      },{
        text: "“So <i>much</i> obliged!” added Tweedledee. “You like poetry?”",
        className: "chapter_text"
      },{
        text: "“Ye-es, pretty well—<i>some</i> poetry,” Alice said doubtfully. “Would you tell me which road leads out of the wood?”",
        className: "chapter_text"
      },{
        text: "“What shall I repeat to her?” said Tweedledee, looking round at Tweedledum with great solemn eyes, and not noticing Alice’s question.",
        className: "chapter_text"
      },{
        text: "“‘<i>The Walrus and the Carpenter</i>’ is the longest,” Tweedledum replied, giving his brother an affectionate hug.",
        className: "chapter_text"
      },{
        text: "Tweedledee began instantly:",
        className: "chapter_text"
      },{
        text: "“The sun was shining—”",
        className: "chapter_text"
      },{
        text: "Here Alice ventured to interrupt him. “If it’s <i>very</i> long,” she said, as politely as she could, “would you please tell me first which road—”",
        className: "chapter_text"
      },{
        text: "“The sun was shining on the sea,<br/>Shining with all his might:<br/>He did his very best to make<br/>The billows smooth and bright—<br/>And this was odd, because it was<br/>The middle of the night.",
        className: "chapter_text_cit"
      },{
        text: "The moon was shining sulkily,<br/>Because she thought the sun<br/>Had got no business to be there<br/>After the day was done—<br/>‘It’s very rude of him,’ she said,<br/>‘To come and spoil the fun!’",
        className: "chapter_text_cit"
      },{
        text: "The sea was wet as wet could be,<br/>The sands were dry as dry.<br/>You could not see a cloud, because<br/>No cloud was in the sky:<br/>No birds were flying over head—<br/>There were no birds to fly.",
        className: "chapter_text_cit"
      },{
        text: "The Walrus and the Carpenter<br/>Were walking close at hand;<br/>They wept like anything to see<br/>Such quantities of sand:<br/>‘If this were only cleared away,’<br/>They said, ‘it <i>would</i> be grand!’",
        className: "chapter_text_cit"
      },{
        text: "‘If seven maids with seven mops<br/>Swept it for half a year,<br/>Do you suppose,’ the Walrus said,<br/>‘That they could get it clear?’<br/>‘I doubt it,’ said the Carpenter,<br/>And shed a bitter tear.",
        className: "chapter_text_cit"
      },{
        text: "‘O Oysters, come and walk with us!’<br/>The Walrus did beseech.<br/>‘A pleasant walk, a pleasant talk,<br/>Along the briny beach:<br/>We cannot do with more than four,<br/>To give a hand to each.’",
        className: "chapter_text_cit"
      },{
        text: "The eldest Oyster looked at him.<br/>But never a word he said:<br/>The eldest Oyster winked his eye,<br/>And shook his heavy head—<br/>Meaning to say he did not choose<br/>To leave the oyster-bed.",
        className: "chapter_text_cit"
      },{
        text: "But four young oysters hurried up,<br/>All eager for the treat:<br/>Their coats were brushed, their faces washed,<br/>Their shoes were clean and neat—<br/>And this was odd, because, you know,<br/>They hadn’t any feet.",
        className: "chapter_text_cit"
      },{
        text: "Four other Oysters followed them,<br/>And yet another four;<br/>And thick and fast they came at last,<br/>And more, and more, and more—<br/>All hopping through the frothy waves,<br/>And scrambling to the shore.",
        className: "chapter_text_cit"
      },{
        text: "The Walrus and the Carpenter<br/>Walked on a mile or so,<br/>And then they rested on a rock<br/>Conveniently low:<br/>And all the little Oysters stood<br/>And waited in a row.",
        className: "chapter_text_cit"
      },{
        text: "‘The time has come,’ the Walrus said,<br/>‘To talk of many things:<br/>Of shoes—and ships—and sealing-wax—<br/>Of cabbages—and kings—<br/>And why the sea is boiling hot—<br/>And whether pigs have wings.’",
        className: "chapter_text_cit"
      },{
        text: "‘But wait a bit,’ the Oysters cried,<br/>‘Before we have our chat;<br/>For some of us are out of breath,<br/>And all of us are fat!’<br/>‘No hurry!’ said the Carpenter.<br/>They thanked him much for that.",
        className: "chapter_text_cit"
      },{
        text: "‘A loaf of bread,’ the Walrus said,<br/>‘Is what we chiefly need:<br/>Pepper and vinegar besides<br/>Are very good indeed—<br/>Now if you’re ready Oysters dear,<br/>We can begin to feed.’",
        className: "chapter_text_cit"
      },{
        text: "‘But not on us!’ the Oysters cried,<br/>Turning a little blue,<br/>‘After such kindness, that would be<br/>A dismal thing to do!’<br/>‘The night is fine,’ the Walrus said<br/>‘Do you admire the view?",
        className: "chapter_text_cit"
      },{
        text: "‘It was so kind of you to come!<br/>And you are very nice!’<br/>The Carpenter said nothing but<br/>‘Cut us another slice:<br/>I wish you were not quite so deaf—<br/>I’ve had to ask you twice!’",
        className: "chapter_text_cit"
      },{
        text: "‘It seems a shame,’ the Walrus said,<br/>‘To play them such a trick,<br/>After we’ve brought them out so far,<br/>And made them trot so quick!’<br/>The Carpenter said nothing but<br/>‘The butter’s spread too thick!’",
        className: "chapter_text_cit"
      },{
        text: "‘I weep for you,’ the Walrus said.<br/>‘I deeply sympathize.’<br/>With sobs and tears he sorted out<br/>Those of the largest size.<br/>Holding his pocket handkerchief<br/>Before his streaming eyes.",
        className: "chapter_text_cit"
      },{
        text: "‘O Oysters,’ said the Carpenter.<br/>‘You’ve had a pleasant run!<br/>Shall we be trotting home again?’<br/>But answer came there none—<br/>And that was scarcely odd, because<br/>They’d eaten every one.”",
        className: "chapter_text_cit"
      },{
        text: "“I like the Walrus best,” said Alice: “because you see he was a little sorry for the poor oysters.”",
        className: "chapter_text"
      },{
        text: "“He ate more than the Carpenter, though,” said Tweedledee. “You see he held his handkerchief in front, so that the Carpenter couldn’t count how many he took: contrariwise.”",
        className: "chapter_text"
      },{
        text: "“That was mean!” Alice said indignantly. “Then I like the Carpenter best—if he didn’t eat so many as the Walrus.”",
        className: "chapter_text"
      },{
        text: "“But he ate as many as he could get,” said Tweedledum.",
        className: "chapter_text"
      },{
        text: "This was a puzzler. After a pause, Alice began, “Well! They were <i>both</i> very unpleasant characters—” Here she checked herself in some alarm, at hearing something that sounded to her like the puffing of a large steam-engine in the wood near them, though she feared it was more likely to be a wild beast. “Are there any lions or tigers about here?” she asked timidly.",
        className: "chapter_text"
      },{
        text: "“It’s only the Red King snoring,” said Tweedledee.",
        className: "chapter_text"
      },{
        text: "“Come and look at him!” the brothers cried, and they each took one of Alice’s hands, and led her up to where the King was sleeping.",
        className: "chapter_text"
      },{
        text: "“Isn’t he a <i>lovely</i> sight?” said Tweedledum.",
        className: "chapter_text"
      },{
        text: "Alice couldn’t say honestly that he was. He had a tall red night-cap on, with a tassel, and he was lying crumpled up into a sort of untidy heap, and snoring loud—“fit to snore his head off!” as Tweedledum remarked.",
        className: "chapter_text"
      },{
        text: "“I’m afraid he’ll catch cold with lying on the damp grass,” said Alice, who was a very thoughtful little girl.",
        className: "chapter_text"
      },{
        text: "“He’s dreaming now,” said Tweedledee: “and what do you think he’s dreaming about?”",
        className: "chapter_text"
      },{
        text: "Alice said “Nobody can guess that.”",
        className: "chapter_text"
      },{
        text: "“Why, about <i>you</i>!” Tweedledee exclaimed, clapping his hands triumphantly. “And if he left off dreaming about you, where do you suppose you’d be?”",
        className: "chapter_text"
      },{
        text: "“Where I am now, of course,” said Alice.",
        className: "chapter_text"
      },{
        text: "“Not you!” Tweedledee retorted contemptuously. “You’d be nowhere. Why, you’re only a sort of thing in his dream!”",
        className: "chapter_text"
      },{
        text: "“If that there King was to wake,” added Tweedledum, “you’d go out—bang!—just like a candle!”",
        className: "chapter_text"
      },{
        text: "“I shouldn’t!” Alice exclaimed indignantly. “Besides, if I’m only a sort of thing in his dream, what are you, I should like to know?”",
        className: "chapter_text"
      },{
        text: "“Ditto” said Tweedledum.",
        className: "chapter_text"
      },{
        text: "“Ditto, ditto” cried Tweedledee.",
        className: "chapter_text"
      },{
        text: "He shouted this so loud that Alice couldn’t help saying, “Hush! You’ll be waking him, I’m afraid, if you make so much noise.”",
        className: "chapter_text"
      },{
        text: "“Well, it no use <i>your</i> talking about waking him,” said Tweedledum, “when you’re only one of the things in his dream. You know very well you’re not real.”",
        className: "chapter_text"
      },{
        text: "“I <i>am</i> real!” said Alice and began to cry.",
        className: "chapter_text"
      },{
        text: "“You won’t make yourself a bit realler by crying,” Tweedledee remarked: “there’s nothing to cry about.”",
        className: "chapter_text"
      },{
        text: "“If I wasn’t real,” Alice said—half-laughing through her tears, it all seemed so ridiculous—“I shouldn’t be able to cry.”",
        className: "chapter_text"
      },{
        text: "“I hope you don’t suppose those are real tears?” Tweedledum interrupted in a tone of great contempt.",
        className: "chapter_text"
      },{
        text: "“I know they’re talking nonsense,” Alice thought to herself: “and it’s foolish to cry about it.” So she brushed away her tears, and went on as cheerfully as she could. “At any rate I’d better be getting out of the wood, for really it’s coming on very dark. Do you think it’s going to rain?”",
        className: "chapter_text"
      },{
        text: "Tweedledum spread a large umbrella over himself and his brother, and looked up into it. “No, I don’t think it is,” he said: “at least—not under <i>here</i>. Nohow.”",
        className: "chapter_text"
      },{
        text: "“But it may rain <i>outside?”</i>",
        className: "chapter_text"
      },{
        text: "“It may—if it chooses,” said Tweedledee: “we’ve no objection. Contrariwise.”",
        className: "chapter_text"
      },{
        text: "“Selfish things!” thought Alice, and she was just going to say “Good-night” and leave them, when Tweedledum sprang out from under the umbrella and seized her by the wrist.",
        className: "chapter_text"
      },{
        text: "“Do you see <i>that</i>?” he said, in a voice choking with passion, and his eyes grew large and yellow all in a moment, as he pointed with a trembling finger at a small white thing lying under the tree.",
        className: "chapter_text"
      },{
        text: "“It’s only a rattle,” Alice said, after a careful examination of the little white thing. “Not a rattle-<i>snake</i>, you know,” she added hastily, thinking that he was frightened: “only an old rattle—quite old and broken.”",
        className: "chapter_text"
      },{
        text: "“I knew it was!” cried Tweedledum, beginning to stamp about wildly and tear his hair. “It’s spoilt, of course!” Here he looked at Tweedledee, who immediately sat down on the ground, and tried to hide himself under the umbrella.",
        className: "chapter_text"
      },{
        text: "“Alice laid her hand upon his arm, and said in a soothing tone, “You needn’t be so angry about an old rattle.”",
        className: "chapter_text"
      },{
        text: "“But it isn’t old!” Tweedledum cried, in a greater fury than ever. “It’s new, I tell you—I bought it yesterday—my nice new RATTLE!” and his voice rose to a perfect scream.",
        className: "chapter_text"
      },{
        text: "All this time Tweedledee was trying his best to fold up the umbrella, with himself in it: which was such an extraordinary thing to do, that it quite took off Alice’s attention from the angry brother. But he couldn’t quite succeed, and it ended in his rolling over, bundled up in the umbrella, with only his head out: and there he lay, opening and shutting his mouth and his large eyes—“looking more like a fish than anything else,” Alice thought.",
        className: "chapter_text"
      },{
        text: "“Of course you agree to have a battle?” Tweedledum said in a calmer tone.",
        className: "chapter_text"
      },{
        text: "“I suppose so,” the other sulkily replied, as he crawled out of the umbrella: “only <i>she</i> must help us to dress up, you know.”",
        className: "chapter_text"
      },{
        text: "So the two brothers went off hand-in-hand into the wood, and returned in a minute with their arms full of things—such as bolsters, blankets, hearth-rugs, table-cloths, dish-covers and coal-scuttles. “I hope you’re a good hand at pinning and tying strings?” Tweedledum remarked. “Every one of these things has got to go on, somehow or other.”",
        className: "chapter_text"
      },{
        text: "Alice said afterwards she had never seen such a fuss made about anything in all her life—the way those two bustled about—and the quantity of things they put on—and the trouble they gave her in tying strings and fastening buttons—“Really they’ll be more like bundles of old clothes than anything else, by the time they’re ready!” she said to herself, as she arranged a bolster round the neck of Tweedledee, “to keep his head from being cut off,” as he said.",
        className: "chapter_text"
      },{
        text: "“You know,” he added very gravely, “it’s one of the most serious things that can possibly happen to one in a battle—to get one’s head cut off.”",
        className: "chapter_text"
      },{
        text: "Alice laughed aloud: but she managed to turn it into a cough, for fear of hurting his feelings.",
        className: "chapter_text"
      },{
        text: "“Do I look very pale?” said Tweedledum, coming up to have his helmet tied on. (He <i>called</i> it a helmet, though it certainly looked much more like a saucepan.)",
        className: "chapter_text"
      },{
        text: "“Well—yes—a <i>little</i>,” Alice replied gently.",
        className: "chapter_text"
      },{
        text: "“I’m very brave generally,” he went on in a low voice: “only to-day I happen to have a headache.”",
        className: "chapter_text"
      },{
        text: "“And <i>I’ve</i> got a toothache!” said Tweedledee, who had overheard the remark. “I’m far worse off than you!”",
        className: "chapter_text"
      },{
        text: "“Then you’d better not fight to-day,” said Alice, thinking it a good opportunity to make peace.",
        className: "chapter_text"
      },{
        text: "“We <i>must</i> have a bit of a fight, but I don’t care about going on long,” said Tweedledum. “What’s the time now?”",
        className: "chapter_text"
      },{
        text: "Tweedledee looked at his watch, and said “Half-past four.”",
        className: "chapter_text"
      },{
        text: "“Let’s fight till six, and then have dinner,” said Tweedledum.",
        className: "chapter_text"
      },{
        text: "“Very well,” the other said, rather sadly: “and <i>she</i> can watch us—only you’d better not come <i>very</i> close,” he added: “I generally hit everything I can see—when I get really excited.”",
        className: "chapter_text"
      },{
        text: "“And <i>I</i> hit everything within reach,” cried Tweedledum, “whether I can see it or not!”",
        className: "chapter_text"
      },{
        text: "Alice laughed. “You must hit the <i>trees</i> pretty often, I should think,” she said.",
        className: "chapter_text"
      },{
        text: "Tweedledum looked round him with a satisfied smile. “I don’t suppose,” he said, “there’ll be a tree left standing, for ever so far round, by the time we’ve finished!”",
        className: "chapter_text"
      },{
        text: "“And all about a rattle!” said Alice, still hoping to make them a <i>little</i> ashamed of fighting for such a trifle.",
        className: "chapter_text"
      },{
        text: "“I shouldn’t have minded it so much,” said Tweedledum, “if it hadn’t been a new one.”",
        className: "chapter_text"
      },{
        text: "“I wish the monstrous crow would come!” thought Alice.",
        className: "chapter_text"
      },{
        text: "“There’s only one sword, you know,” Tweedledum said to his brother: “but you can have the umbrella—it’s quite as sharp. Only we must begin quick. It’s getting as dark as it can.”",
        className: "chapter_text"
      },{
        text: "“And darker,” said Tweedledee.",
        className: "chapter_text"
      },{
        text: "It was getting dark so suddenly that Alice thought there must be a thunderstorm coming on. “What a thick black cloud that is!” she said. “And how fast it comes! Why, I do believe it’s got wings!”",
        className: "chapter_text"
      },{
        text: "“It’s the crow!” Tweedledum cried out in a shrill voice of alarm: and the two brothers took to their heels and were out of sight in a moment.",
        className: "chapter_text"
      },{
        text: "Alice ran a little way into the wood, and stopped under a large tree. “It can never get at me <i>here</i>,” she thought: “it’s far too large to squeeze itself in among the trees. But I wish it wouldn’t flap its wings so—it makes quite a hurricane in the wood—here’s somebody’s shawl being blown away!”",
        className: "chapter_text"
      }
    ]),

    5: createChapter("Wool and Water", "V", "https://placehold.co/25", [
      {
        text: "She caught the shawl as she spoke, and looked about for the owner: in another moment the White Queen came running wildly through the wood, with both arms stretched out wide, as if she were flying, and Alice very civilly went to meet her with the shawl.",
        className: "chapter_text"
      },{
        text: "“I’m very glad I happened to be in the way,” Alice said, as she helped her to put on her shawl again.",
        className: "chapter_text"
      },{
        text: "The White Queen only looked at her in a helpless frightened sort of way, and kept repeating something in a whisper to herself that sounded like “bread-and-butter, bread-and-butter,” and Alice felt that if there was to be any conversation at all, she must manage it herself. So she began rather timidly: “Am I addressing the White Queen?”",
        className: "chapter_text"
      },{
        text: "“Well, yes, if you call that a-dressing,” The Queen said. “It isn’t my notion of the thing, at all.”",
        className: "chapter_text"
      },{
        text: "Alice thought it would never do to have an argument at the very beginning of their conversation, so she smiled and said, “If your Majesty will only tell me the right way to begin, I’ll do it as well as I can.”",
        className: "chapter_text"
      },{
        text: "“But I don’t want it done at all!” groaned the poor Queen. “I’ve been a-dressing myself for the last two hours.”",
        className: "chapter_text"
      },{
        text: "It would have been all the better, as it seemed to Alice, if she had got some one else to dress her, she was so dreadfully untidy. “Every single thing’s crooked,” Alice thought to herself, “and she’s all over pins!—may I put your shawl straight for you?” she added aloud.",
        className: "chapter_text"
      },{
        text: "“I don’t know what’s the matter with it!” the Queen said, in a melancholy voice. “It’s out of temper, I think. I’ve pinned it here, and I’ve pinned it there, but there’s no pleasing it!”",
        className: "chapter_text"
      },{
        text: "“It <i>can’t</i> go straight, you know, if you pin it all on one side,” Alice said, as she gently put it right for her; “and, dear me, what a state your hair is in!”",
        className: "chapter_text"
      },{
        text: "“The brush has got entangled in it!” the Queen said with a sigh. “And I lost the comb yesterday.”",
        className: "chapter_text"
      },{
        text: "Alice carefully released the brush, and did her best to get the hair into order. “Come, you look rather better now!” she said, after altering most of the pins. “But really you should have a lady’s maid!”",
        className: "chapter_text"
      },{
        text: "“I’m sure I’ll take you with pleasure!” the Queen said. “Twopence a week, and jam every other day.”",
        className: "chapter_text"
      },{
        text: "Alice couldn’t help laughing, as she said, “I don’t want you to hire <i>me</i>—and I don’t care for jam.”",
        className: "chapter_text"
      },{
        text: "“It’s very good jam,” said the Queen.",
        className: "chapter_text"
      },{
        text: "“Well, I don’t want any <i>to-day</i>, at any rate.”",
        className: "chapter_text"
      },{
        text: "“You couldn’t have it if you <i>did</i> want it,” the Queen said. “The rule is, jam to-morrow and jam yesterday—but never jam to-day.”",
        className: "chapter_text"
      },{
        text: "“It <i>must</i> come sometimes to ‘jam to-day,’” Alice objected.",
        className: "chapter_text"
      },{
        text: "“No, it can’t,” said the Queen. “It’s jam every <i>other</i> day: to-day isn’t any <i>other</i> day, you know.”",
        className: "chapter_text"
      },{
        text: "“I don’t understand you,” said Alice. “It’s dreadfully confusing!”",
        className: "chapter_text"
      },{
        text: "“That’s the effect of living backwards,” the Queen said kindly: “it always makes one a little giddy at first—”",
        className: "chapter_text"
      },{
        text: "“Living backwards!” Alice repeated in great astonishment. “I never heard of such a thing!”",
        className: "chapter_text"
      },{
        text: "“—but there’s one great advantage in it, that one’s memory works both ways.”",
        className: "chapter_text"
      },{
        text: "“I’m sure mine only works one way,” Alice remarked. “I can’t remember things before they happen.”",
        className: "chapter_text"
      },{
        text: "“It’s a poor sort of memory that only works backwards,” the Queen remarked.",
        className: "chapter_text"
      },{
        text: "“What sort of things do you remember best?” Alice ventured to ask.",
        className: "chapter_text"
      },{
        text: "“Oh, things that happened the week after next,” the Queen replied in a careless tone. “For instance, now,” she went on, sticking a large piece of plaster on her finger as she spoke, “there’s the King’s Messenger. He’s in prison now, being punished: and the trial doesn’t even begin till next Wednesday: and of course the crime comes last of all.”",
        className: "chapter_text"
      },{
        text: "“Suppose he never commits the crime?” said Alice.",
        className: "chapter_text"
      },{
        text: "“That would be all the better, wouldn’t it?” the Queen said, as she bound the plaster round her finger with a bit of ribbon.",
        className: "chapter_text"
      },{
        text: "Alice felt there was no denying <i>that</i>. “Of course it would be all the better,” she said: “but it wouldn’t be all the better his being punished.”",
        className: "chapter_text"
      },{
        text: "“You’re wrong <i>there</i>, at any rate,” said the Queen: “were you ever punished?”",
        className: "chapter_text"
      },{
        text: "“Only for faults,” said Alice.",
        className: "chapter_text"
      },{
        text: "“And you were all the better for it, I know!” the Queen said triumphantly.",
        className: "chapter_text"
      },{
        text: "“Yes, but then I <i>had</i> done the things I was punished for,” said Alice: “that makes all the difference.”",
        className: "chapter_text"
      },{
        text: "“But if you <i>hadn’t</i> done them,” the Queen said, “that would have been better still; better, and better, and better!” Her voice went higher with each “better,” till it got quite to a squeak at last.",
        className: "chapter_text"
      },{
        text: "Alice was just beginning to say “There’s a mistake somewhere—,” when the Queen began screaming so loud that she had to leave the sentence unfinished. “Oh, oh, oh!” shouted the Queen, shaking her hand about as if she wanted to shake it off. “My finger’s bleeding! Oh, oh, oh, oh!”",
        className: "chapter_text"
      },{
        text: "Her screams were so exactly like the whistle of a steam-engine, that Alice had to hold both her hands over her ears.",
        className: "chapter_text"
      },{
        text: "“What is the matter?” she said, as soon as there was a chance of making herself heard. “Have you pricked your finger?”",
        className: "chapter_text"
      },{
        text: "“I haven’t pricked it <i>yet</i>,” the Queen said, “but I soon shall—oh, oh, oh!”",
        className: "chapter_text"
      },{
        text: "“When do you expect to do it?” Alice asked, feeling very much inclined to laugh.",
        className: "chapter_text"
      },{
        text: "“When I fasten my shawl again,” the poor Queen groaned out: “the brooch will come undone directly. Oh, oh!” As she said the words the brooch flew open, and the Queen clutched wildly at it, and tried to clasp it again.",
        className: "chapter_text"
      },{
        text: "“Take care!” cried Alice. “You’re holding it all crooked!” And she caught at the brooch; but it was too late: the pin had slipped, and the Queen had pricked her finger.",
        className: "chapter_text"
      },{
        text: "“That accounts for the bleeding, you see,” she said to Alice with a smile. “Now you understand the way things happen here.”",
        className: "chapter_text"
      },{
        text: "“But why don’t you scream now?” Alice asked, holding her hands ready to put over her ears again.",
        className: "chapter_text"
      },{
        text: "“Why, I’ve done all the screaming already,” said the Queen. “What would be the good of having it all over again?”",
        className: "chapter_text"
      },{
        text: "By this time it was getting light. “The crow must have flown away, I think,” said Alice: “I’m so glad it’s gone. I thought it was the night coming on.”",
        className: "chapter_text"
      },{
        text: "“I wish I could manage to be glad!” the Queen said. “Only I never can remember the rule. You must be very happy, living in this wood, and being glad whenever you like!”",
        className: "chapter_text"
      },{
        text: "“Only it is so very lonely here!” Alice said in a melancholy voice; and at the thought of her loneliness two large tears came rolling down her cheeks.",
        className: "chapter_text"
      },{
        text: "“Oh, don’t go on like that!” cried the poor Queen, wringing her hands in despair. “Consider what a great girl you are. Consider what a long way you’ve come to-day. Consider what o’clock it is. Consider anything, only don’t cry!”",
        className: "chapter_text"
      },{
        text: "Alice could not help laughing at this, even in the midst of her tears. “Can <i>you</i> keep from crying by considering things?” she asked.",
        className: "chapter_text"
      },{
        text: "“That’s the way it’s done,” the Queen said with great decision: “nobody can do two things at once, you know. Let’s consider your age to begin with—how old are you?”",
        className: "chapter_text"
      },{
        text: "“I’m seven and a half exactly.”",
        className: "chapter_text"
      },{
        text: "“You needn’t say ‘exactually,’” the Queen remarked: “I can believe it without that. Now I’ll give <i>you</i> something to believe. I’m just one hundred and one, five months and a day.”",
        className: "chapter_text"
      },{
        text: "“I can’t believe <i>that</i>!” said Alice.",
        className: "chapter_text"
      },{
        text: "“Can’t you?” the Queen said in a pitying tone. “Try again: draw a long breath, and shut your eyes.”",
        className: "chapter_text"
      },{
        text: "Alice laughed. “There’s no use trying,” she said: “one can’t believe impossible things.”",
        className: "chapter_text"
      },{
        text: "“I daresay you haven’t had much practice,” said the Queen. “When I was your age, I always did it for half-an-hour a day. Why, sometimes I’ve believed as many as six impossible things before breakfast. There goes the shawl again!”",
        className: "chapter_text"
      },{
        text: "The brooch had come undone as she spoke, and a sudden gust of wind blew the Queen’s shawl across a little brook. The Queen spread out her arms again, and went flying after it, and this time she succeeded in catching it for herself. “I’ve got it!” she cried in a triumphant tone. “Now you shall see me pin it on again, all by myself!”",
        className: "chapter_text"
      },{
        text: "“Then I hope your finger is better now?” Alice said very politely, as she crossed the little brook after the Queen.",
        className: "chapter_text"
      },{
        text: "* * *",
        className: "chapter_text_space"
      },{
        text: "“Oh, much better!” cried the Queen, her voice rising to a squeak as she went on. “Much be-etter! Be-etter! Be-e-e-etter! Be-e-ehh!” The last word ended in a long bleat, so like a sheep that Alice quite started.",
        className: "chapter_text"
      },{
        text: "She looked at the Queen, who seemed to have suddenly wrapped herself up in wool. Alice rubbed her eyes, and looked again. She couldn’t make out what had happened at all. Was she in a shop? And was that really—was it really a <i>sheep</i> that was sitting on the other side of the counter? Rub as she could, she could make nothing more of it: she was in a little dark shop, leaning with her elbows on the counter, and opposite to her was an old Sheep, sitting in an arm-chair knitting, and every now and then leaving off to look at her through a great pair of spectacles.",
        className: "chapter_text"
      },{
        text: "“What is it you want to buy?” the Sheep said at last, looking up for a moment from her knitting.",
        className: "chapter_text"
      },{
        text: "“I don’t <i>quite</i> know yet,” Alice said, very gently. “I should like to look all round me first, if I might.”",
        className: "chapter_text"
      },{
        text: "“You may look in front of you, and on both sides, if you like,” said the Sheep: “but you can’t look <i>all</i> round you—unless you’ve got eyes at the back of your head.”",
        className: "chapter_text"
      },{
        text: "But these, as it happened, Alice had <i>not</i> got: so she contented herself with turning round, looking at the shelves as she came to them.",
        className: "chapter_text"
      },{
        text: "The shop seemed to be full of all manner of curious things—but the oddest part of it all was, that whenever she looked hard at any shelf, to make out exactly what it had on it, that particular shelf was always quite empty: though the others round it were crowded as full as they could hold.",
        className: "chapter_text"
      },{
        text: "“Things flow about so here!” she said at last in a plaintive tone, after she had spent a minute or so in vainly pursuing a large bright thing, that looked sometimes like a doll and sometimes like a work-box, and was always in the shelf next above the one she was looking at. “And this one is the most provoking of all—but I’ll tell you what—” she added, as a sudden thought struck her, “I’ll follow it up to the very top shelf of all. It’ll puzzle it to go through the ceiling, I expect!”",
        className: "chapter_text"
      },{
        text: "But even this plan failed: the “thing” went through the ceiling as quietly as possible, as if it were quite used to it.",
        className: "chapter_text"
      },{
        text: "“Are you a child or a teetotum?” the Sheep said, as she took up another pair of needles. “You’ll make me giddy soon, if you go on turning round like that.” She was now working with fourteen pairs at once, and Alice couldn’t help looking at her in great astonishment.",
        className: "chapter_text"
      },{
        text: "“How <i>can</i> she knit with so many?” the puzzled child thought to herself. “She gets more and more like a porcupine every minute!”",
        className: "chapter_text"
      },{
        text: "“Can you row?” the Sheep asked, handing her a pair of knitting-needles as she spoke.",
        className: "chapter_text"
      },{
        text: "“Yes, a little—but not on land—and not with needles—” Alice was beginning to say, when suddenly the needles turned into oars in her hands, and she found they were in a little boat, gliding along between banks: so there was nothing for it but to do her best.",
        className: "chapter_text"
      },{
        text: "“Feather!” cried the Sheep, as she took up another pair of needles.",
        className: "chapter_text"
      },{
        text: "This didn’t sound like a remark that needed any answer, so Alice said nothing, but pulled away. There was something very queer about the water, she thought, as every now and then the oars got fast in it, and would hardly come out again.",
        className: "chapter_text"
      },{
        text: "“Feather! Feather!” the Sheep cried again, taking more needles. “You’ll be catching a crab directly.”",
        className: "chapter_text"
      },{
        text: "“A dear little crab!” thought Alice. “I should like that.”",
        className: "chapter_text"
      },{
        text: "“Didn’t you hear me say ‘Feather’?” the Sheep cried angrily, taking up quite a bunch of needles.",
        className: "chapter_text"
      },{
        text: "“Indeed I did,” said Alice: “you’ve said it very often—and very loud. Please, where are the crabs?”",
        className: "chapter_text"
      },{
        text: "“In the water, of course!” said the Sheep, sticking some of the needles into her hair, as her hands were full. “Feather, I say!”",
        className: "chapter_text"
      },{
        text: "“<i>Why</i> do you say ‘feather’ so often?” Alice asked at last, rather vexed. “I’m not a bird!”",
        className: "chapter_text"
      },{
        text: "“You are,” said the Sheep: “you’re a little goose.”",
        className: "chapter_text"
      },{
        text: "This offended Alice a little, so there was no more conversation for a minute or two, while the boat glided gently on, sometimes among beds of weeds (which made the oars stick fast in the water, worse then ever), and sometimes under trees, but always with the same tall river-banks frowning over their heads.",
        className: "chapter_text"
      },{
        text: "“Oh, please! There are some scented rushes!” Alice cried in a sudden transport of delight. “There really are—and <i>such</i> beauties!”",
        className: "chapter_text"
      },{
        text: "“You needn’t say ‘please’ to <i>me</i> about ’em,” the Sheep said, without looking up from her knitting: “I didn’t put ’em there, and I’m not going to take ’em away.”",
        className: "chapter_text"
      },{
        text: "“No, but I meant—please, may we wait and pick some?” Alice pleaded. “If you don’t mind stopping the boat for a minute.”",
        className: "chapter_text"
      },{
        text: "“How am I to stop it?” said the Sheep. “If you leave off rowing, it’ll stop of itself.”",
        className: "chapter_text"
      },{
        text: "So the boat was left to drift down the stream as it would, till it glided gently in among the waving rushes. And then the little sleeves were carefully rolled up, and the little arms were plunged in elbow-deep to get the rushes a good long way down before breaking them off—and for a while Alice forgot all about the Sheep and the knitting, as she bent over the side of the boat, with just the ends of her tangled hair dipping into the water—while with bright eager eyes she caught at one bunch after another of the darling scented rushes.",
        className: "chapter_text"
      },{
        text: "“I only hope the boat won’t tipple over!” she said to herself. “Oh, what a lovely one! Only I couldn’t quite reach it.” And it certainly did seem a little provoking (“almost as if it happened on purpose,” she thought) that, though she managed to pick plenty of beautiful rushes as the boat glided by, there was always a more lovely one that she couldn’t reach.",
        className: "chapter_text"
      },{
        text: "“The prettiest are always further!” she said at last, with a sigh at the obstinacy of the rushes in growing so far off, as, with flushed cheeks and dripping hair and hands, she scrambled back into her place, and began to arrange her new-found treasures.",
        className: "chapter_text"
      },{
        text: "What mattered it to her just then that the rushes had begun to fade, and to lose all their scent and beauty, from the very moment that she picked them? Even real scented rushes, you know, last only a very little while—and these, being dream-rushes, melted away almost like snow, as they lay in heaps at her feet—but Alice hardly noticed this, there were so many other curious things to think about.",
        className: "chapter_text"
      },{
        text: "They hadn’t gone much farther before the blade of one of the oars got fast in the water and <i>wouldn’t</i> come out again (so Alice explained it afterwards), and the consequence was that the handle of it caught her under the chin, and, in spite of a series of little shrieks of “Oh, oh, oh!” from poor Alice, it swept her straight off the seat, and down among the heap of rushes.",
        className: "chapter_text"
      },{
        text: "However, she wasn’t hurt, and was soon up again: the Sheep went on with her knitting all the while, just as if nothing had happened. “That was a nice crab you caught!” she remarked, as Alice got back into her place, very much relieved to find herself still in the boat.",
        className: "chapter_text"
      },{
        text: "“Was it? I didn’t see it,” Said Alice, peeping cautiously over the side of the boat into the dark water. “I wish it hadn’t let go—I should so like to see a little crab to take home with me!” But the Sheep only laughed scornfully, and went on with her knitting.",
        className: "chapter_text"
      },{
        text: "“Are there many crabs here?” said Alice.",
        className: "chapter_text"
      },{
        text: "“Crabs, and all sorts of things,” said the Sheep: “plenty of choice, only make up your mind. Now, what do you want to buy?”",
        className: "chapter_text"
      },{
        text: "“To buy!” Alice echoed in a tone that was half astonished and half frightened—for the oars, and the boat, and the river, had vanished all in a moment, and she was back again in the little dark shop.",
        className: "chapter_text"
      },{
        text: "“I should like to buy an egg, please,” she said timidly. “How do you sell them?”",
        className: "chapter_text"
      },{
        text: "“Fivepence farthing for one—Twopence for two,” the Sheep replied.",
        className: "chapter_text"
      },{
        text: "“Then two are cheaper than one?” Alice said in a surprised tone, taking out her purse.",
        className: "chapter_text"
      },{
        text: "“Only you <i>must</i> eat them both, if you buy two,” said the Sheep.",
        className: "chapter_text"
      },{
        text: "“Then I’ll have <i>one</i>, please,” said Alice, as she put the money down on the counter. For she thought to herself, “They mightn’t be at all nice, you know.”",
        className: "chapter_text"
      },{
        text: "The Sheep took the money, and put it away in a box: then she said “I never put things into people’s hands—that would never do—you must get it for yourself.” And so saying, she went off to the other end of the shop, and set the egg upright on a shelf.",
        className: "chapter_text"
      },{
        text: "“I wonder <i>why</i> it wouldn’t do?” thought Alice, as she groped her way among the tables and chairs, for the shop was very dark towards the end. “The egg seems to get further away the more I walk towards it. Let me see, is this a chair? Why, it’s got branches, I declare! How very odd to find trees growing here! And actually here’s a little brook! Well, this is the very queerest shop I ever saw!”",
        className: "chapter_text"
      },{
        text: "* * *",
        className: "chapter_text_space"
      },{
        text: "So she went on, wondering more and more at every step, as everything turned into a tree the moment she came up to it, and she quite expected the egg to do the same.",
        className: "chapter_text"
      }
    ]),

    6: createChapter("Humpty Dumpty", "VI", "https://placehold.co/25", [
      {
        text: "However, the egg only got larger and larger, and more and more human: when she had come within a few yards of it, she saw that it had eyes and a nose and mouth; and when she had come close to it, she saw clearly that it was HUMPTY DUMPTY himself. “It can’t be anybody else!” she said to herself. “I’m as certain of it, as if his name were written all over his face.”",
        className: "chapter_text"
      },{
        text: "It might have been written a hundred times, easily, on that enormous face. Humpty Dumpty was sitting with his legs crossed, like a Turk, on the top of a high wall—such a narrow one that Alice quite wondered how he could keep his balance—and, as his eyes were steadily fixed in the opposite direction, and he didn’t take the least notice of her, she thought he must be a stuffed figure after all.",
        className: "chapter_text"
      },{
        text: "“And how exactly like an egg he is!” she said aloud, standing with her hands ready to catch him, for she was every moment expecting him to fall.",
        className: "chapter_text"
      },{
        text: "“It’s <i>very</i> provoking,” Humpty Dumpty said after a long silence, looking away from Alice as he spoke, “to be called an egg—<i>Very!</i>”",
        className: "chapter_text"
      },{
        text: "“I said you <i>looked</i> like an egg, Sir,” Alice gently explained. “And some eggs are very pretty, you know” she added, hoping to turn her remark into a sort of a compliment.",
        className: "chapter_text"
      },{
        text: "“Some people,” said Humpty Dumpty, looking away from her as usual, “have no more sense than a baby!”",
        className: "chapter_text"
      },{
        text: "Alice didn’t know what to say to this: it wasn’t at all like conversation, she thought, as he never said anything to <i>her</i>; in fact, his last remark was evidently addressed to a tree—so she stood and softly repeated to herself:—",
        className: "chapter_text"
      },{
        text: "“Humpty Dumpty sat on a wall:<br/>Humpty Dumpty had a great fall.<br/>All the King’s horses and all the King’s men<br/>Couldn’t put Humpty Dumpty in his place again.”",
        className: "chapter_text_cit"
      },{
        text: "“That last line is much too long for the poetry,” she added, almost out loud, forgetting that Humpty Dumpty would hear her.",
        className: "chapter_text"
      },{
        text: "“Don’t stand there chattering to yourself like that,” Humpty Dumpty said, looking at her for the first time, “but tell me your name and your business.”",
        className: "chapter_text"
      },{
        text: "“My <i>name</i> is Alice, but—”",
        className: "chapter_text"
      },{
        text: "“It’s a stupid enough name!” Humpty Dumpty interrupted impatiently. “What does it mean?”",
        className: "chapter_text"
      },{
        text: "“<i>Must</i> a name mean something?” Alice asked doubtfully.",
        className: "chapter_text"
      },{
        text: "“Of course it must,” Humpty Dumpty said with a short laugh: “<i>my</i> name means the shape I am—and a good handsome shape it is, too. With a name like yours, you might be any shape, almost.”",
        className: "chapter_text"
      },{
        text: "“Why do you sit out here all alone?” said Alice, not wishing to begin an argument.",
        className: "chapter_text"
      },{
        text: "“Why, because there’s nobody with me!” cried Humpty Dumpty. “Did you think I didn’t know the answer to <i>that</i>? Ask another.”",
        className: "chapter_text"
      },{
        text: "“Don’t you think you’d be safer down on the ground?” Alice went on, not with any idea of making another riddle, but simply in her good-natured anxiety for the queer creature. “That wall is so <i>very</i> narrow!”",
        className: "chapter_text"
      },{
        text: "“What tremendously easy riddles you ask!” Humpty Dumpty growled out. “Of course I don’t think so! Why, if ever I <i>did</i> fall off—which there’s no chance of—but <i>if</i> I did—” Here he pursed his lips and looked so solemn and grand that Alice could hardly help laughing. “If I did fall,” he went on, “<i>The King has promised me—with his very own mouth</i>—to—to—”",
        className: "chapter_text"
      },{
        text: "“To send all his horses and all his men,” Alice interrupted, rather unwisely.",
        className: "chapter_text"
      },{
        text: "“Now I declare that’s too bad!” Humpty Dumpty cried, breaking into a sudden passion. “You’ve been listening at doors—and behind trees—and down chimneys—or you couldn’t have known it!”",
        className: "chapter_text"
      },{
        text: "“I haven’t, indeed!” Alice said very gently. “It’s in a book.”",
        className: "chapter_text"
      },{
        text: "“Ah, well! They may write such things in a book,” Humpty Dumpty said in a calmer tone. “That’s what you call a History of England, that is. Now, take a good look at me! I’m one that has spoken to a King, I am: mayhap you’ll never see such another: and to show you I’m not proud, you may shake hands with me!” And he grinned almost from ear to ear, as he leant forwards (and as nearly as possible fell off the wall in doing so) and offered Alice his hand. She watched him a little anxiously as she took it. “If he smiled much more, the ends of his mouth might meet behind,” she thought: “and then I don’t know what would happen to his head! I’m afraid it would come off!”",
        className: "chapter_text"
      },{
        text: "“Yes, all his horses and all his men,” Humpty Dumpty went on. “They’d pick me up again in a minute, <i>they</i> would! However, this conversation is going on a little too fast: let’s go back to the last remark but one.”",
        className: "chapter_text"
      },{
        text: "“I’m afraid I can’t quite remember it,” Alice said very politely.",
        className: "chapter_text"
      },{
        text: "“In that case we start fresh,” said Humpty Dumpty, “and it’s my turn to choose a subject—” (“He talks about it just as if it was a game!” thought Alice.) “So here’s a question for you. How old did you say you were?”",
        className: "chapter_text"
      },{
        text: "Alice made a short calculation, and said “Seven years and six months.”",
        className: "chapter_text"
      },{
        text: "“Wrong!” Humpty Dumpty exclaimed triumphantly. “You never said a word like it!”",
        className: "chapter_text"
      },{
        text: "“I though you meant ‘How old <i>are</i> you?’” Alice explained.",
        className: "chapter_text"
      },{
        text: "“If I’d meant that, I’d have said it,” said Humpty Dumpty.",
        className: "chapter_text"
      },{
        text: "Alice didn’t want to begin another argument, so she said nothing.",
        className: "chapter_text"
      },{
        text: "“Seven years and six months!” Humpty Dumpty repeated thoughtfully. “An uncomfortable sort of age. Now if you’d asked <i>my</i> advice, I’d have said ‘Leave off at seven’—but it’s too late now.”",
        className: "chapter_text"
      },{
        text: "“I never ask advice about growing,” Alice said indignantly.",
        className: "chapter_text"
      },{
        text: "“Too proud?” the other inquired.",
        className: "chapter_text"
      },{
        text: "Alice felt even more indignant at this suggestion. “I mean,” she said, “that one can’t help growing older.”",
        className: "chapter_text"
      },{
        text: "“<i>One</i> can’t, perhaps,” said Humpty Dumpty, “but two can. With proper assistance, you might have left off at seven.”",
        className: "chapter_text"
      },{
        text: "“What a beautiful belt you’ve got on!” Alice suddenly remarked.",
        className: "chapter_text"
      },{
        text: "(They had had quite enough of the subject of age, she thought: and if they really were to take turns in choosing subjects, it was her turn now.) “At least,” she corrected herself on second thoughts, “a beautiful cravat, I should have said—no, a belt, I mean—I beg your pardon!” she added in dismay, for Humpty Dumpty looked thoroughly offended, and she began to wish she hadn’t chosen that subject. “If I only knew,” she thought to herself, “which was neck and which was waist!”",
        className: "chapter_text"
      },{
        text: "Evidently Humpty Dumpty was very angry, though he said nothing for a minute or two. When he <i>did</i> speak again, it was in a deep growl.",
        className: "chapter_text"
      },{
        text: "“It is a—<i>most—provoking</i>—thing,” he said at last, “when a person doesn’t know a cravat from a belt!”",
        className: "chapter_text"
      },{
        text: "“I know it’s very ignorant of me,” Alice said, in so humble a tone that Humpty Dumpty relented.",
        className: "chapter_text"
      },{
        text: "“It’s a cravat, child, and a beautiful one, as you say. It’s a present from the White King and Queen. There now!”",
        className: "chapter_text"
      },{
        text: "“Is it really?” said Alice, quite pleased to find that she <i>had</i> chosen a good subject, after all.",
        className: "chapter_text"
      },{
        text: "“They gave it me,” Humpty Dumpty continued thoughtfully, as he crossed one knee over the other and clasped his hands round it, “they gave it me—for an un-birthday present.”",
        className: "chapter_text"
      },{
        text: "“I beg your pardon?” Alice said with a puzzled air.",
        className: "chapter_text"
      },{
        text: "“I’m not offended,” said Humpty Dumpty.",
        className: "chapter_text"
      },{
        text: "“I mean, what is an un-birthday present?”",
        className: "chapter_text"
      },{
        text: "“A present given when it isn’t your birthday, of course.”",
        className: "chapter_text"
      },{
        text: "Alice considered a little. “I like birthday presents best,” she said at last.",
        className: "chapter_text"
      },{
        text: "“You don’t know what you’re talking about!” cried Humpty Dumpty. “How many days are there in a year?”",
        className: "chapter_text"
      },{
        text: "“Three hundred and sixty-five,” said Alice.",
        className: "chapter_text"
      },{
        text: "“And how many birthdays have you?”",
        className: "chapter_text"
      },{
        text: "“One.”",
        className: "chapter_text"
      },{
        text: "“And if you take one from three hundred and sixty-five, what remains?”",
        className: "chapter_text"
      },{
        text: "“Three hundred and sixty-four, of course.”",
        className: "chapter_text"
      },{
        text: "Humpty Dumpty looked doubtful. “I’d rather see that done on paper,” he said.",
        className: "chapter_text"
      },{
        text: "",
        className: "chapter_text"
      },{
        text: "",
        className: "chapter_text"
      },{
        text: "",
        className: "chapter_text"
      },{
        text: "Alice couldn’t help smiling as she took out her memorandum-book, and worked the sum for him:",
        className: "chapter_text"
      },{
        text: "365<br/>1<hr/>364<hr/>",
        className: "especial-1"
      },{
        text: "Humpty Dumpty took the book, and looked at it carefully. “That seems to be done right—” he began.",
        className: "chapter_text"
      },{
        text: "“You’re holding it upside down!” Alice interrupted.",
        className: "chapter_text"
      },{
        text: "“To be sure I was!” Humpty Dumpty said gaily, as she turned it round for him. “I thought it looked a little queer. As I was saying, that <i>seems</i> to be done right—though I haven’t time to look it over thoroughly just now—and that shows that there are three hundred and sixty-four days when you might get un-birthday presents—”",
        className: "chapter_text"
      },{
        text: "“Certainly,” said Alice.",
        className: "chapter_text"
      },{
        text: "“And only <i>one</i> for birthday presents, you know. There’s glory for you!”",
        className: "chapter_text"
      },{
        text: "“I don’t know what you mean by ‘glory,’” Alice said.",
        className: "chapter_text"
      },{
        text: "Humpty Dumpty smiled contemptuously. “Of course you don’t—till I tell you. I meant ‘there’s a nice knock-down argument for you!’”",
        className: "chapter_text"
      },{
        text: "“But ‘glory’ doesn’t mean ‘a nice knock-down argument,’” Alice objected.",
        className: "chapter_text"
      },{
        text: "“When I use a word,” Humpty Dumpty said in rather a scornful tone, “it means just what I choose it to mean—neither more nor less.”",
        className: "chapter_text"
      },{
        text: "“The question is,” said Alice, “whether you <i>can</i> make words mean so many different things.”",
        className: "chapter_text"
      },{
        text: "“The question is,” said Humpty Dumpty, “which is to be master—that’s all.”",
        className: "chapter_text"
      },{
        text: "Alice was too much puzzled to say anything, so after a minute Humpty Dumpty began again. “They’ve a temper, some of them—particularly verbs, they’re the proudest—adjectives you can do anything with, but not verbs—however, <i>I</i> can manage the whole lot of them! Impenetrability! That’s what <i>I</i> say!”",
        className: "chapter_text"
      },{
        text: "“Would you tell me, please,” said Alice “what that means?”",
        className: "chapter_text"
      },{
        text: "“Now you talk like a reasonable child,” said Humpty Dumpty, looking very much pleased. “I meant by ‘impenetrability’ that we’ve had enough of that subject, and it would be just as well if you’d mention what you mean to do next, as I suppose you don’t mean to stop here all the rest of your life.”",
        className: "chapter_text"
      },{
        text: "“That’s a great deal to make one word mean,” Alice said in a thoughtful tone.",
        className: "chapter_text"
      },{
        text: "“When I make a word do a lot of work like that,” said Humpty Dumpty, “I always pay it extra.”",
        className: "chapter_text"
      },{
        text: "“Oh!” said Alice. She was too much puzzled to make any other remark.",
        className: "chapter_text"
      },{
        text: "“Ah, you should see ’em come round me of a Saturday night,” Humpty Dumpty went on, wagging his head gravely from side to side: “for to get their wages, you know.”",
        className: "chapter_text"
      },{
        text: "(Alice didn’t venture to ask what he paid them with; and so you see I can’t tell <i>you</i>.)",
        className: "chapter_text"
      },{
        text: "“You seem very clever at explaining words, Sir,” said Alice. “Would you kindly tell me the meaning of the poem called ‘Jabberwocky’?”",
        className: "chapter_text"
      },{
        text: "“Let’s hear it,” said Humpty Dumpty. “I can explain all the poems that were ever invented—and a good many that haven’t been invented just yet.”",
        className: "chapter_text"
      },{
        text: "This sounded very hopeful, so Alice repeated the first verse:",
        className: "chapter_text"
      },{
        text: "’Twas brillig, and the slithy toves<br/>Did gyre and gimble in the wabe;<br/>All mimsy were the borogoves,<br/>And the mome raths outgrabe.",
        className: "chapter_text_cit"
      },{
        text: "“That’s enough to begin with,” Humpty Dumpty interrupted: “there are plenty of hard words there. ‘<i>Brillig</i>’ means four o’clock in the afternoon—the time when you begin <i>broiling</i> things for dinner.”",
        className: "chapter_text"
      },{
        text: "“That’ll do very well,” said Alice: “and ‘<i>slithy</i>’?”",
        className: "chapter_text"
      },{
        text: "“Well, ‘<i>slithy</i>’ means ‘lithe and slimy.’ ‘Lithe’ is the same as ‘active.’ You see it’s like a portmanteau—there are two meanings packed up into one word.”",
        className: "chapter_text"
      },{
        text: "“I see it now,” Alice remarked thoughtfully: “and what are ‘<i>toves</i>’?”",
        className: "chapter_text"
      },{
        text: "“Well, ‘<i>toves</i>’ are something like badgers—they’re something like lizards—and they’re something like corkscrews.”",
        className: "chapter_text"
      },{
        text: "“They must be very curious looking creatures.”",
        className: "chapter_text"
      },{
        text: "“They are that,” said Humpty Dumpty: “also they make their nests under sun-dials—also they live on cheese.”",
        className: "chapter_text"
      },{
        text: "“And what’s the ‘<i>gyre</i>’ and to ‘gimble’?”",
        className: "chapter_text"
      },{
        text: "“To ‘<i>gyre</i>’ is to go round and round like a gyroscope. To ‘<i>gimble</i>’ is to make holes like a gimlet.”",
        className: "chapter_text"
      },{
        text: "“And ‘<i>the wabe</i>’ is the grass-plot round a sun-dial, I suppose?” said Alice, surprised at her own ingenuity.",
        className: "chapter_text"
      },{
        text: "“Of course it is. It’s called ‘<i>wabe</i>,’ you know, because it goes a long way before it, and a long way behind it—”",
        className: "chapter_text"
      },{
        text: "“And a long way beyond it on each side,” Alice added.",
        className: "chapter_text"
      },{
        text: "“Exactly so. Well, then, ‘<i>mimsy</i>’ is ‘flimsy and miserable’ (there’s another portmanteau for you). And a ‘<i>borogove</i>’ is a thin shabby-looking bird with its feathers sticking out all round—something like a live mop.”",
        className: "chapter_text"
      },{
        text: "“And then ‘<i>mome raths</i>’?” said Alice. “I’m afraid I’m giving you a great deal of trouble.”",
        className: "chapter_text"
      },{
        text: "“Well, a ‘<i>rath</i>’ is a sort of green pig: but ‘mome’ I’m not certain about. I think it’s short for ‘from home’—meaning that they’d lost their way, you know.”",
        className: "chapter_text"
      },{
        text: "“And what does ‘<i>outgrabe</i>’ mean?”",
        className: "chapter_text"
      },{
        text: "“Well, ‘<i>outgrabing</i>’ is something between bellowing and whistling, with a kind of sneeze in the middle: however, you’ll hear it done, maybe—down in the wood yonder—and when you’ve once heard it you’ll be <i>quite</i> content. Who’s been repeating all that hard stuff to you?”",
        className: "chapter_text"
      },{
        text: "“I read it in a book,” said Alice. “But I had some poetry repeated to me, much easier than that, by—Tweedledee, I think it was.”",
        className: "chapter_text"
      },{
        text: "“As to poetry, you know,” said Humpty Dumpty, stretching out one of his great hands, “I can repeat poetry as well as other folk, if it comes to that—”",
        className: "chapter_text"
      },{
        text: "“Oh, it needn’t come to that!” Alice hastily said, hoping to keep him from beginning.",
        className: "chapter_text"
      },{
        text: "“The piece I’m going to repeat,” he went on without noticing her remark, “was written entirely for your amusement.”",
        className: "chapter_text"
      },{
        text: "Alice felt that in that case she really ought to listen to it, so she sat down, and said “Thank you” rather sadly.",
        className: "chapter_text"
      },{
        text: "“In winter, when the fields are white,<br/>I sing this song for your delight—",
        className: "chapter_text_cit"
      },{
        text: "only I don’t sing it,” he added, as an explanation.",
        className: "chapter_text"
      },{
        text: "I see you don’t,” said Alice.",
        className: "chapter_text"
      },{
        text: "“If you can see whether I’m singing or not, you’ve sharper eyes than most.” Humpty Dumpty remarked severely. Alice was silent.",
        className: "chapter_text"
      },{
        text: "“In spring, when woods are getting green,<br/>I’ll try and tell you what I mean.”",
        className: "chapter_text_cit"
      },{
        text: "“Thank you very much,” said Alice.",
        className: "chapter_text"
      },{
        text: "“In summer, when the days are long,<br/>Perhaps you’ll understand the song:",
        className: "chapter_text_cit"
      },{
        text: "In autumn, when the leaves are brown,<br/>Take pen and ink, and write it down.”",
        className: "chapter_text_cit"
      },{
        text: "“I will, if I can remember it so long,” said Alice.",
        className: "chapter_text"
      },{
        text: "“You needn’t go on making remarks like that,” Humpty Dumpty said: “they’re not sensible, and they put me out.”",
        className: "chapter_text"
      },{
        text: "“I sent a message to the fish:<br/>I told them ‘This is what I wish.’",
        className: "chapter_text_cit"
      },{
        text: "The little fishes of the sea,<br/>They sent an answer back to me.",
        className: "chapter_text_cit"
      },{
        text: "The little fishes’ answer was<br/>‘We cannot do it, Sir, because—’”",
        className: "chapter_text_cit"
      },{
        text: "“I’m afraid I don’t quite understand,” said Alice.",
        className: "chapter_text"
      },{
        text: "“It gets easier further on,” Humpty Dumpty replied.",
        className: "chapter_text"
      },{
        text: "“I sent to them again to say<br/>‘It will be better to obey.’",
        className: "chapter_text_cit"
      },{
        text: "The fishes answered with a grin,<br/>‘Why, what a temper you are in!’",
        className: "chapter_text_cit"
      },{
        text: "I told them once, I told them twice:<br/>They would not listen to advice.",
        className: "chapter_text_cit"
      },{
        text: "I took a kettle large and new,<br/>Fit for the deed I had to do.",
        className: "chapter_text_cit"
      },{
        text: "My heart went hop, my heart went thump;<br/>I filled the kettle at the pump.",
        className: "chapter_text_cit"
      },{
        text: "Then some one came to me and said,<br/>‘The little fishes are in bed.’",
        className: "chapter_text_cit"
      },{
        text: "I said to him, I said it plain,<br/>‘Then you must wake them up again.’",
        className: "chapter_text_cit"
      },{
        text: "I said it very loud and clear;<br/>I went and shouted in his ear.”",
        className: "chapter_text_cit"
      },{
        text: "Humpty Dumpty raised his voice almost to a scream as he repeated this verse, and Alice thought with a shudder, “I wouldn’t have been the messenger for <i>anything!</i>”",
        className: "chapter_text"
      },{
        text: "“But he was very stiff and proud;<br/>He said ‘You needn’t shout so loud!’",
        className: "chapter_text_cit"
      },{
        text: "And he was very proud and stiff;<br/>He said ‘I’d go and wake them, if—’",
        className: "chapter_text_cit"
      },{
        text: "I took a corkscrew from the shelf:<br/>I went to wake them up myself.",
        className: "chapter_text_citm"
      },{
        text: "And when I found the door was locked,<br/>I pulled and pushed and kicked and knocked.",
        className: "chapter_text_cit"
      },{
        text: "And when I found the door was shut,<br/>I tried to turn the handle, but—”",
        className: "chapter_text_cit"
      },{
        text: "There was a long pause.",
        className: "chapter_text"
      },{
        text: "“Is that all?” Alice timidly asked.",
        className: "chapter_text"
      },{
        text: "“That’s all,” said Humpty Dumpty. “Good-bye.”",
        className: "chapter_text"
      },{
        text: "This was rather sudden, Alice thought: but, after such a <i>very</i> strong hint that she ought to be going, she felt that it would hardly be civil to stay. So she got up, and held out her hand. “Good-bye, till we meet again!” she said as cheerfully as she could.",
        className: "chapter_text"
      },{
        text: "“I shouldn’t know you again if we did meet,” Humpty Dumpty replied in a discontented tone, giving her one of his fingers to shake; “you’re so exactly like other people.”",
        className: "chapter_text"
      },{
        text: "“The face is what one goes by, generally,” Alice remarked in a thoughtful tone.",
        className: "chapter_text"
      },{
        text: "“That’s just what I complain of,” said Humpty Dumpty. “Your face is the same as everybody has—the two eyes, so—” (marking their places in the air with this thumb) “nose in the middle, mouth under. It’s always the same. Now if you had the two eyes on the same side of the nose, for instance—or the mouth at the top—that would be <i>some</i> help.”",
        className: "chapter_text"
      },{
        text: "“It wouldn’t look nice,” Alice objected. But Humpty Dumpty only shut his eyes and said “Wait till you’ve tried.”",
        className: "chapter_text"
      },{
        text: "Alice waited a minute to see if he would speak again, but as he never opened his eyes or took any further notice of her, she said “Good-bye!” once more, and, getting no answer to this, she quietly walked away: but she couldn’t help saying to herself as she went, “Of all the unsatisfactory—” (she repeated this aloud, as it was a great comfort to have such a long word to say) “of all the unsatisfactory people I ever met—” She never finished the sentence, for at this moment a heavy crash shook the forest from end to end.",
        className: "chapter_text"
      }

    ]),

    7: createChapter("The Lion and the Unicorn", "VII", "https://placehold.co/25", [
      {
        text: "The next moment soldiers came running through the wood, at first in twos and threes, then ten or twenty together, and at last in such crowds that they seemed to fill the whole forest. Alice got behind a tree, for fear of being run over, and watched them go by.",
        className: "chapter_text"
      },{
        text: "She thought that in all her life she had never seen soldiers so uncertain on their feet: they were always tripping over something or other, and whenever one went down, several more always fell over him, so that the ground was soon covered with little heaps of men.",
        className: "chapter_text"
      },{
        text: "Then came the horses. Having four feet, these managed rather better than the foot-soldiers: but even <i>they</i> stumbled now and then; and it seemed to be a regular rule that, whenever a horse stumbled the rider fell off instantly. The confusion got worse every moment, and Alice was very glad to get out of the wood into an open place, where she found the White King seated on the ground, busily writing in his memorandum-book.",
        className: "chapter_text"
      },{
        text: "“I’ve sent them all!” the King cried in a tone of delight, on seeing Alice. “Did you happen to meet any soldiers, my dear, as you came through the wood?”",
        className: "chapter_text"
      },{
        text: "“Yes, I did,” said Alice: “several thousand, I should think.”",
        className: "chapter_text"
      },{
        text: "“Four thousand two hundred and seven, that’s the exact number,” the King said, referring to his book. “I couldn’t send all the horses, you know, because two of them are wanted in the game. And I haven’t sent the two Messengers, either. They’re both gone to the town. Just look along the road, and tell me if you can see either of them.”",
        className: "chapter_text"
      },{
        text: "“I see nobody on the road,” said Alice.",
        className: "chapter_text"
      },{
        text: "“I only wish I had such eyes,” the King remarked in a fretful tone. “To be able to see Nobody! And at that distance, too! Why, it’s as much as I can do to see real people, by this light!”",
        className: "chapter_text"
      },{
        text: "All this was lost on Alice, who was still looking intently along the road, shading her eyes with one hand. “I see somebody now!” she exclaimed at last. “But he’s coming very slowly—and what curious attitudes he goes into!” (For the messenger kept skipping up and down, and wriggling like an eel, as he came along, with his great hands spread out like fans on each side.)",
        className: "chapter_text"
      },{
        text: "“Not at all,” said the King. “He’s an Anglo-Saxon Messenger—and those are Anglo-Saxon attitudes. He only does them when he’s happy. His name is Haigha.” (He pronounced it so as to rhyme with “mayor.”)",
        className: "chapter_text"
      },{
        text: "“I love my love with an H,” Alice couldn’t help beginning, “because he is Happy. I hate him with an H, because he is Hideous. I fed him with—with—with Ham-sandwiches and Hay. His name is Haigha, and he lives—”",
        className: "chapter_text"
      },{
        text: "“He lives on the Hill,” the King remarked simply, without the least idea that he was joining in the game, while Alice was still hesitating for the name of a town beginning with H. “The other Messenger’s called Hatta. I must have <i>two</i>, you know—to come and go. One to come, and one to go.”",
        className: "chapter_text"
      },{
        text: "“I beg your pardon?” said Alice.",
        className: "chapter_text"
      },{
        text: "“It isn’t respectable to beg,” said the King.",
        className: "chapter_text"
      },{
        text: "“I only meant that I didn’t understand,” said Alice. “Why one to come and one to go?”",
        className: "chapter_text"
      },{
        text: "“Didn’t I tell you?” the King repeated impatiently. “I must have <i>two</i>—to fetch and carry. One to fetch, and one to carry.”",
        className: "chapter_text"
      },{
        text: "At this moment the Messenger arrived: he was far too much out of breath to say a word, and could only wave his hands about, and make the most fearful faces at the poor King.",
        className: "chapter_text"
      },{
        text: "“This young lady loves you with an H,” the King said, introducing Alice in the hope of turning off the Messenger’s attention from himself—but it was no use—the Anglo-Saxon attitudes only got more extraordinary every moment, while the great eyes rolled wildly from side to side.",
        className: "chapter_text"
      },{
        text: "“You alarm me!” said the King. “I feel faint—Give me a ham sandwich!”",
        className: "chapter_text"
      },{
        text: "On which the Messenger, to Alice’s great amusement, opened a bag that hung round his neck, and handed a sandwich to the King, who devoured it greedily.",
        className: "chapter_text"
      },{
        text: "“Another sandwich!” said the King.",
        className: "chapter_text"
      },{
        text: "“There’s nothing but hay left now,” the Messenger said, peeping into the bag.",
        className: "chapter_text"
      },{
        text: "“Hay, then,” the King murmured in a faint whisper.",
        className: "chapter_text"
      },{
        text: "Alice was glad to see that it revived him a good deal. “There’s nothing like eating hay when you’re faint,” he remarked to her, as he munched away.",
        className: "chapter_text"
      },{
        text: "“I should think throwing cold water over you would be better,” Alice suggested: “or some sal-volatile.”",
        className: "chapter_text"
      },{
        text: "“I didn’t say there was nothing <i>better</i>,” the King replied. “I said there was nothing <i>like</i> it.” Which Alice did not venture to deny.",
        className: "chapter_text"
      },{
        text: "“Who did you pass on the road?” the King went on, holding out his hand to the Messenger for some more hay.",
        className: "chapter_text"
      },{
        text: "“Nobody,” said the Messenger.",
        className: "chapter_text"
      },{
        text: "“Quite right,” said the King: “this young lady saw him too. So of course Nobody walks slower than you.”",
        className: "chapter_text"
      },{
        text: "“I do my best,” the Messenger said in a sulky tone. “I’m sure nobody walks much faster than I do!”",
        className: "chapter_text"
      },{
        text: "“He can’t do that,” said the King, “or else he’d have been here first. However, now you’ve got your breath, you may tell us what’s happened in the town.”",
        className: "chapter_text"
      },{
        text: "“I’ll whisper it,” said the Messenger, putting his hands to his mouth in the shape of a trumpet, and stooping so as to get close to the King’s ear. Alice was sorry for this, as she wanted to hear the news too. However, instead of whispering, he simply shouted at the top of his voice “They’re at it again!”",
        className: "chapter_text"
      },{
        text: "“Do you call <i>that</i> a whisper?” cried the poor King, jumping up and shaking himself. “If you do such a thing again, I’ll have you buttered! It went through and through my head like an earthquake!”",
        className: "chapter_text"
      },{
        text: "“It would have to be a very tiny earthquake!” thought Alice. “Who are at it again?” she ventured to ask.",
        className: "chapter_text"
      },{
        text: "“Why the Lion and the Unicorn, of course,” said the King.",
        className: "chapter_text"
      },{
        text: "“Fighting for the crown?”",
        className: "chapter_text"
      },{
        text: "“Yes, to be sure,” said the King: “and the best of the joke is, that it’s my crown all the while! Let’s run and see them.” And they trotted off, Alice repeating to herself, as she ran, the words of the old song:—",
        className: "chapter_text"
      },{
        text: "“The Lion and the Unicorn were fighting for the crown:<br/>The Lion beat the Unicorn all round the town.<br/>Some gave them white bread, some gave them brown;<br/>Some gave them plum-cake and drummed them out of town.”",
        className: "chapter_text_cit"
      },{
        text: "“Does—the one—that wins—get the crown?” she asked, as well as she could, for the run was putting her quite out of breath.",
        className: "chapter_text"
      },{
        text: "“Dear me, no!” said the King. “What an idea!”",
        className: "chapter_text"
      },{
        text: "“Would you—be good enough,” Alice panted out, after running a little further, “to stop a minute—just to get—one’s breath again?”",
        className: "chapter_text"
      },{
        text: "“I’m <i>good</i> enough,” the King said, “only I’m not strong enough. You see, a minute goes by so fearfully quick. You might as well try to stop a Bandersnatch!”",
        className: "chapter_text"
      },{
        text: "Alice had no more breath for talking, so they trotted on in silence, till they came in sight of a great crowd, in the middle of which the Lion and Unicorn were fighting. They were in such a cloud of dust, that at first Alice could not make out which was which: but she soon managed to distinguish the Unicorn by his horn.",
        className: "chapter_text"
      },{
        text: "They placed themselves close to where Hatta, the other messenger, was standing watching the fight, with a cup of tea in one hand and a piece of bread-and-butter in the other.",
        className: "chapter_text"
      },{
        text: "“He’s only just out of prison, and he hadn’t finished his tea when he was sent in,” Haigha whispered to Alice: “and they only give them oyster-shells in there—so you see he’s very hungry and thirsty. How are you, dear child?” he went on, putting his arm affectionately round Hatta’s neck.",
        className: "chapter_text"
      },{
        text: "Hatta looked round and nodded, and went on with his bread and butter.",
        className: "chapter_text"
      },{
        text: "“Were you happy in prison, dear child?” said Haigha.",
        className: "chapter_text"
      },{
        text: "Hatta looked round once more, and this time a tear or two trickled down his cheek: but not a word would he say.",
        className: "chapter_text"
      },{
        text: "“Speak, can’t you!” Haigha cried impatiently. But Hatta only munched away, and drank some more tea.",
        className: "chapter_text"
      },{
        text: "“Speak, won’t you!” cried the King. “How are they getting on with the fight?”",
        className: "chapter_text"
      },{
        text: "Hatta made a desperate effort, and swallowed a large piece of bread-and-butter. “They’re getting on very well,” he said in a choking voice: “each of them has been down about eighty-seven times.”",
        className: "chapter_text"
      },{
        text: "“Then I suppose they’ll soon bring the white bread and the brown?” Alice ventured to remark.",
        className: "chapter_text"
      },{
        text: "“It’s waiting for ’em now,” said Hatta: “this is a bit of it as I’m eating.”",
        className: "chapter_text"
      },{
        text: "There was a pause in the fight just then, and the Lion and the Unicorn sat down, panting, while the King called out “Ten minutes allowed for refreshments!” Haigha and Hatta set to work at once, carrying rough trays of white and brown bread. Alice took a piece to taste, but it was very dry.",
        className: "chapter_text"
      },{
        text: "“I don’t think they’ll fight any more to-day,” the King said to Hatta: “go and order the drums to begin.” And Hatta went bounding away like a grasshopper.",
        className: "chapter_text"
      },{
        text: "For a minute or two Alice stood silent, watching him. Suddenly she brightened up. “Look, look!” she cried, pointing eagerly. “There’s the White Queen running across the country! She came flying out of the wood over yonder—How fast those Queens can run!”",
        className: "chapter_text"
      },{
        text: "“There’s some enemy after her, no doubt,” the King said, without even looking round. “That wood’s full of them.”",
        className: "chapter_text"
      },{
        text: "“But aren’t you going to run and help her?” Alice asked, very much surprised at his taking it so quietly.",
        className: "chapter_text"
      },{
        text: "“No use, no use!” said the King. “She runs so fearfully quick. You might as well try to catch a Bandersnatch! But I’ll make a memorandum about her, if you like—She’s a dear good creature,” he repeated softly to himself, as he opened his memorandum-book. “Do you spell ‘creature’ with a double ‘e’?”",
        className: "chapter_text"
      },{
        text: "At this moment the Unicorn sauntered by them, with his hands in his pockets. “I had the best of it this time?” he said to the King, just glancing at him as he passed.",
        className: "chapter_text"
      },{
        text: "“A little—a little,” the King replied, rather nervously. “You shouldn’t have run him through with your horn, you know.”",
        className: "chapter_text"
      },{
        text: "“It didn’t hurt him,” the Unicorn said carelessly, and he was going on, when his eye happened to fall upon Alice: he turned round rather instantly, and stood for some time looking at her with an air of the deepest disgust.",
        className: "chapter_text"
      },{
        text: "“What—is—this?” he said at last.",
        className: "chapter_text"
      },{
        text: "“This is a child!” Haigha replied eagerly, coming in front of Alice to introduce her, and spreading out both his hands towards her in an Anglo-Saxon attitude. “We only found it to-day. It’s as large as life, and twice as natural!”",
        className: "chapter_text"
      },{
        text: "“I always thought they were fabulous monsters!” said the Unicorn. “Is it alive?”",
        className: "chapter_text"
      },{
        text: "“It can talk,” said Haigha, solemnly.",
        className: "chapter_text"
      },{
        text: "The Unicorn looked dreamily at Alice, and said “Talk, child.”",
        className: "chapter_text"
      },{
        text: "Alice could not help her lips curling up into a smile as she began: “Do you know, I always thought Unicorns were fabulous monsters, too! I never saw one alive before!”",
        className: "chapter_text"
      },{
        text: "“Well, now that we have seen each other,” said the Unicorn, “if you’ll believe in me, I’ll believe in you. Is that a bargain?”",
        className: "chapter_text"
      },{
        text: "“Yes, if you like,” said Alice.",
        className: "chapter_text"
      },{
        text: "“Come, fetch out the plum-cake, old man!” the Unicorn went on, turning from her to the King. “None of your brown bread for me!”",
        className: "chapter_text"
      },{
        text: "“Certainly—certainly!” the King muttered, and beckoned to Haigha. “Open the bag!” he whispered. “Quick! Not that one—that’s full of hay!”",
        className: "chapter_text"
      },{
        text: "Haigha took a large cake out of the bag, and gave it to Alice to hold, while he got out a dish and carving-knife. How they all came out of it Alice couldn’t guess. It was just like a conjuring-trick, she thought.",
        className: "chapter_text"
      },{
        text: "The Lion had joined them while this was going on: he looked very tired and sleepy, and his eyes were half shut. “What’s this!” he said, blinking lazily at Alice, and speaking in a deep hollow tone that sounded like the tolling of a great bell.",
        className: "chapter_text"
      },{
        text: "“Ah, what is it, now?” the Unicorn cried eagerly. “You’ll never guess! I couldn’t.”",
        className: "chapter_text"
      },{
        text: "The Lion looked at Alice wearily. “Are you animal—vegetable—or mineral?” he said, yawning at every other word.",
        className: "chapter_text"
      },{
        text: "“It’s a fabulous monster!” the Unicorn cried out, before Alice could reply.",
        className: "chapter_text"
      },{
        text: "“Then hand round the plum-cake, Monster,” the Lion said, lying down and putting his chin on his paws. “And sit down, both of you,” (to the King and the Unicorn): “fair play with the cake, you know!”",
        className: "chapter_text"
      },{
        text: "The King was evidently very uncomfortable at having to sit down between the two great creatures; but there was no other place for him.",
        className: "chapter_text"
      },{
        text: "“What a fight we might have for the crown, now!” the Unicorn said, looking slyly up at the crown, which the poor King was nearly shaking off his head, he trembled so much.",
        className: "chapter_text"
      },{
        text: "“I should win easy,” said the Lion.",
        className: "chapter_text"
      },{
        text: "“I’m not so sure of that,” said the Unicorn.",
        className: "chapter_text"
      },{
        text: "“Why, I beat you all round the town, you chicken!” the Lion replied angrily, half getting up as he spoke.",
        className: "chapter_text"
      },{
        text: "Here the King interrupted, to prevent the quarrel going on: he was very nervous, and his voice quite quivered. “All round the town?” he said. “That’s a good long way. Did you go by the old bridge, or the market-place? You get the best view by the old bridge.”",
        className: "chapter_text"
      },{
        text: "“I’m sure I don’t know,” the Lion growled out as he lay down again. “There was too much dust to see anything. What a time the Monster is, cutting up that cake!”",
        className: "chapter_text"
      },{
        text: "Alice had seated herself on the bank of a little brook, with the great dish on her knees, and was sawing away diligently with the knife. “It’s very provoking!” she said, in reply to the Lion (she was getting quite used to being called “the Monster”). “I’ve cut several slices already, but they always join on again!”",
        className: "chapter_text"
      },{
        text: "“You don’t know how to manage Looking-glass cakes,” the Unicorn remarked. “Hand it round first, and cut it afterwards.”",
        className: "chapter_text"
      },{
        text: "This sounded nonsense, but Alice very obediently got up, and carried the dish round, and the cake divided itself into three pieces as she did so. “Now cut it up,” said the Lion, as she returned to her place with the empty dish.",
        className: "chapter_text"
      },{
        text: "“I say, this isn’t fair!” cried the Unicorn, as Alice sat with the knife in her hand, very much puzzled how to begin. “The Monster has given the Lion twice as much as me!”",
        className: "chapter_text"
      },{
        text: "“She’s kept none for herself, anyhow,” said the Lion. “Do you like plum-cake, Monster?”",
        className: "chapter_text"
      },{
        text: "But before Alice could answer him, the drums began.",
        className: "chapter_text"
      },{
        text: "Where the noise came from, she couldn’t make out: the air seemed full of it, and it rang through and through her head till she felt quite deafened. She started to her feet and sprang across the little brook in her terror,",
        className: "chapter_text"
      },{
        text: "* * *",
        className: ".chapter_text_space"
      },{
        text: "and had just time to see the Lion and the Unicorn rise to their feet, with angry looks at being interrupted in their feast, before she dropped to her knees, and put her hands over her ears, vainly trying to shut out the dreadful uproar.",
        className: "chapter_text"
      },{
        text: "“If that doesn’t ‘drum them out of town,’” she thought to herself, “nothing ever will!”",
        className: "chapter_text"
      }
    ]),

    8: createChapter("It's my own Invention", "VIII", "https://placehold.co/25", [
      {
        text: "After a while the noise seemed gradually to die away, till all was dead silence, and Alice lifted up her head in some alarm. There was no one to be seen, and her first thought was that she must have been dreaming about the Lion and the Unicorn and those queer Anglo-Saxon Messengers. However, there was the great dish still lying at her feet, on which she had tried to cut the plum-cake, “So I wasn’t dreaming, after all,” she said to herself, “unless—unless we’re all part of the same dream. Only I do hope it’s my dream, and not the Red King’s! I don’t like belonging to another person’s dream,” she went on in a rather complaining tone: “I’ve a great mind to go and wake him, and see what happens!”",
        className: "chapter_text"
      },{
        text: "At this moment her thoughts were interrupted by a loud shouting of “Ahoy! Ahoy! Check!” and a Knight dressed in crimson armour came galloping down upon her, brandishing a great club. Just as he reached her, the horse stopped suddenly: “You’re my prisoner!” the Knight cried, as he tumbled off his horse.",
        className: "chapter_text"
      },{
        text: "Startled as she was, Alice was more frightened for him than for herself at the moment, and watched him with some anxiety as he mounted again. As soon as he was comfortably in the saddle, he began once more “You’re my—” but here another voice broke in “Ahoy! Ahoy! Check!” and Alice looked round in some surprise for the new enemy.",
        className: "chapter_text"
      },{
        text: "This time it was a White Knight. He drew up at Alice’s side, and tumbled off his horse just as the Red Knight had done: then he got on again, and the two Knights sat and looked at each other for some time without speaking. Alice looked from one to the other in some bewilderment.",
        className: "chapter_text"
      },{
        text: "“She’s <i>my</i> prisoner, you know!” the Red Knight said at last.",
        className: "chapter_text"
      },{
        text: "“Yes, but then <i>I</i> came and rescued her!” the White Knight replied.",
        className: "chapter_text"
      },{
        text: "“Well, we must fight for her, then,” said the Red Knight, as he took up his helmet (which hung from the saddle, and was something the shape of a horse’s head), and put it on.",
        className: "chapter_text"
      },{
        text: "“You will observe the Rules of Battle, of course?” the White Knight remarked, putting on his helmet too.",
        className: "chapter_text"
      },{
        text: "“I always do,” said the Red Knight, and they began banging away at each other with such fury that Alice got behind a tree to be out of the way of the blows.",
        className: "chapter_text"
      },{
        text: "“I wonder, now, what the Rules of Battle are,” she said to herself, as she watched the fight, timidly peeping out from her hiding-place: “one Rule seems to be, that if one Knight hits the other, he knocks him off his horse, and if he misses, he tumbles off himself—and another Rule seems to be that they hold their clubs with their arms, as if they were Punch and Judy—What a noise they make when they tumble! Just like a whole set of fire-irons falling into the fender! And how quiet the horses are! They let them get on and off them just as if they were tables!”",
        className: "chapter_text"
      },{
        text: "Another Rule of Battle, that Alice had not noticed, seemed to be that they always fell on their heads, and the battle ended with their both falling off in this way, side by side: when they got up again, they shook hands, and then the Red Knight mounted and galloped off.",
        className: "chapter_text"
      },{
        text: "“It was a glorious victory, wasn’t it?” said the White Knight, as he came up panting.",
        className: "chapter_text"
      },{
        text: "“I don’t know,” Alice said doubtfully. “I don’t want to be anybody’s prisoner. I want to be a Queen.”",
        className: "chapter_text"
      },{
        text: "“So you will, when you’ve crossed the next brook,” said the White Knight. “I’ll see you safe to the end of the wood—and then I must go back, you know. That’s the end of my move.”",
        className: "chapter_text"
      },{
        text: "“Thank you very much,” said Alice. “May I help you off with your helmet?” It was evidently more than he could manage by himself; however, she managed to shake him out of it at last.",
        className: "chapter_text"
      },{
        text: "“Now one can breathe more easily,” said the Knight, putting back his shaggy hair with both hands, and turning his gentle face and large mild eyes to Alice. She thought she had never seen such a strange-looking soldier in all her life.",
        className: "chapter_text"
      },{
        text: "He was dressed in tin armour, which seemed to fit him very badly, and he had a queer-shaped little deal box fastened across his shoulder, upside-down, and with the lid hanging open. Alice looked at it with great curiosity.",
        className: "chapter_text"
      },{
        text: "“I see you’re admiring my little box.” the Knight said in a friendly tone. “It’s my own invention—to keep clothes and sandwiches in. You see I carry it upside-down, so that the rain can’t get in.”",
        className: "chapter_text"
      },{
        text: "“But the things can get <i>out</i>,” Alice gently remarked. “Do you know the lid’s open?”",
        className: "chapter_text"
      },{
        text: "“I didn’t know it,” the Knight said, a shade of vexation passing over his face. “Then all the things must have fallen out! And the box is no use without them.” He unfastened it as he spoke, and was just going to throw it into the bushes, when a sudden thought seemed to strike him, and he hung it carefully on a tree. “Can you guess why I did that?” he said to Alice.",
        className: "chapter_text"
      },{
        text: "Alice shook her head.",
        className: "chapter_text"
      },{
        text: "“In hopes some bees may make a nest in it—then I should get the honey.”",
        className: "chapter_text"
      },{
        text: "“But you’ve got a bee-hive—or something like one—fastened to the saddle,” said Alice.",
        className: "chapter_text"
      },{
        text: "“Yes, it’s a very good bee-hive,” the Knight said in a discontented tone, “one of the best kind. But not a single bee has come near it yet. And the other thing is a mouse-trap. I suppose the mice keep the bees out—or the bees keep the mice out, I don’t know which.”",
        className: "chapter_text"
      },{
        text: "“I was wondering what the mouse-trap was for,” said Alice. “It isn’t very likely there would be any mice on the horse’s back.”",
        className: "chapter_text"
      },{
        text: "“Not very likely, perhaps,” said the Knight: “but if they <i>do</i~l0> come, I don’t choose to have them running all about.”",
        className: "chapter_text"
      },{
        text: "“You see,” he went on after a pause, “it’s as well to be provided for ´<i>everything</i>. That’s the reason the horse has all those anklets round his feet.”",
        className: "chapter_text"
      },{
        text: "“But what are they for?” Alice asked in a tone of great curiosity.",
        className: "chapter_text"
      },{
        text: "“To guard against the bites of sharks,” the Knight replied. “It’s an invention of my own. And now help me on. I’ll go with you to the end of the wood—What’s the dish for?”",
        className: "chapter_text"
      },{
        text: "“It’s meant for plum-cake,” said Alice.",
        className: "chapter_text"
      },{
        text: "“We’d better take it with us,” the Knight said. “It’ll come in handy if we find any plum-cake. Help me to get it into this bag.”",
        className: "chapter_text"
      },{
        text: "This took a very long time to manage, though Alice held the bag open very carefully, because the Knight was so very awkward in putting in the dish: the first two or three times that he tried he fell in himself instead. “It’s rather a tight fit, you see,” he said, as they got it in a last; “There are so many candlesticks in the bag.” And he hung it to the saddle, which was already loaded with bunches of carrots, and fire-irons, and many other things.",
        className: "chapter_text"
      },{
        text: "“I hope you’ve got your hair well fastened on?” he continued, as they set off.",
        className: "chapter_text"
      },{
        text: "“Only in the usual way,” Alice said, smiling.",
        className: "chapter_text"
      },{
        text: "“That’s hardly enough,” he said, anxiously. “You see the wind is so very strong here. It’s as strong as soup.”",
        className: "chapter_text"
      },{
        text: "“Have you invented a plan for keeping the hair from being blown off?” Alice enquired.",
        className: "chapter_text"
      },{
        text: "“Not yet,” said the Knight. “But I’ve got a plan for keeping it from <i>falling</i> off.”",
        className: "chapter_text"
      },{
        text: "“I should like to hear it, very much.”",
        className: "chapter_text"
      },{
        text: "“First you take an upright stick,” said the Knight. “Then you make your hair creep up it, like a fruit-tree. Now the reason hair falls off is because it hangs <i>down</i>—things never fall <i>upwards</i>, you know. It’s a plan of my own invention. You may try it if you like.”",
        className: "chapter_text"
      },{
        text: "It didn’t sound a comfortable plan, Alice thought, and for a few minutes she walked on in silence, puzzling over the idea, and every now and then stopping to help the poor Knight, who certainly was not a good rider.",
        className: "chapter_text"
      },{
        text: "Whenever the horse stopped (which it did very often), he fell off in front; and whenever it went on again (which it generally did rather suddenly), he fell off behind. Otherwise he kept on pretty well, except that he had a habit of now and then falling off sideways; and as he generally did this on the side on which Alice was walking, she soon found that it was the best plan not to walk quite close to the horse.",
        className: "chapter_text"
      },{
        text: "“I’m afraid you’ve not had much practice in riding,” she ventured to say, as she was helping him up from his fifth tumble.",
        className: "chapter_text"
      },{
        text: "The Knight looked very much surprised, and a little offended at the remark. “What makes you say that?” he asked, as he scrambled back into the saddle, keeping hold of Alice’s hair with one hand, to save himself from falling over on the other side.",
        className: "chapter_text"
      },{
        text: "“Because people don’t fall off quite so often, when they’ve had much practice.”",
        className: "chapter_text"
      },{
        text: "“I’ve had plenty of practice,” the Knight said very gravely: “plenty of practice!”",
        className: "chapter_text"
      },{
        text: "Alice could think of nothing better to say than “Indeed?” but she said it as heartily as she could. They went on a little way in silence after this, the Knight with his eyes shut, muttering to himself, and Alice watching anxiously for the next tumble.",
        className: "chapter_text"
      },{
        text: "“The great art of riding,” the Knight suddenly began in a loud voice, waving his right arm as he spoke, “is to keep—” Here the sentence ended as suddenly as it had begun, as the Knight fell heavily on the top of his head exactly in the path where Alice was walking. She was quite frightened this time, and said in an anxious tone, as she picked him up, “I hope no bones are broken?”",
        className: "chapter_text"
      },{
        text: "“None to speak of,” the Knight said, as if he didn’t mind breaking two or three of them. “The great art of riding, as I was saying, is—to keep your balance properly. Like this, you know—”",
        className: "chapter_text"
      },{
        text: "He let go the bridle, and stretched out both his arms to show Alice what he meant, and this time he fell flat on his back, right under the horse’s feet.",
        className: "chapter_text"
      },{
        text: "“Plenty of practice!” he went on repeating, all the time that Alice was getting him on his feet again. “Plenty of practice!”",
        className: "chapter_text"
      },{
        text: "“It’s too ridiculous!” cried Alice, losing all her patience this time. “You ought to have a wooden horse on wheels, that you ought!”",
        className: "chapter_text"
      },{
        text: "“Does that kind go smoothly?” the Knight asked in a tone of great interest, clasping his arms round the horse’s neck as he spoke, just in time to save himself from tumbling off again.",
        className: "chapter_text"
      },{
        text: "“Much more smoothly than a live horse,” Alice said, with a little scream of laughter, in spite of all she could do to prevent it.",
        className: "chapter_text"
      },{
        text: "“I’ll get one,” the Knight said thoughtfully to himself. “One or two—several.”",
        className: "chapter_text"
      },{
        text: "There was a short silence after this, and then the Knight went on again. “I’m a great hand at inventing things. Now, I daresay you noticed, that last time you picked me up, that I was looking rather thoughtful?”",
        className: "chapter_text"
      },{
        text: "“You <i>were</i> a little grave,” said Alice.",
        className: "chapter_text"
      },{
        text: "“Well, just then I was inventing a new way of getting over a gate—would you like to hear it?”",
        className: "chapter_text"
      },{
        text: "“Very much indeed,” Alice said politely.",
        className: "chapter_text"
      },{
        text: "“I’ll tell you how I came to think of it,” said the Knight. “You see, I said to myself, ‘The only difficulty is with the feet: the head is high enough already.’ Now, first I put my head on the top of the gate—then I stand on my head—then the feet are high enough, you see—then I’m over, you see.”",
        className: "chapter_text"
      },{
        text: "“Yes, I suppose you’d be over when that was done,” Alice said thoughtfully: “but don’t you think it would be rather hard?”",
        className: "chapter_text"
      },{
        text: "“I haven’t tried it yet,” the Knight said, gravely: “so I can’t tell for certain—but I’m afraid it would be a little hard.”",
        className: "chapter_text"
      },{
        text: "He looked so vexed at the idea, that Alice changed the subject hastily. “What a curious helmet you’ve got!” she said cheerfully. “Is that your invention too?”",
        className: "chapter_text"
      },{
        text: "The Knight looked down proudly at his helmet, which hung from the saddle. “Yes,” he said, “but I’ve invented a better one than that—like a sugar loaf. When I used to wear it, if I fell off the horse, it always touched the ground directly. So I had a very little way to fall, you see—But there was the danger of falling into it, to be sure. That happened to me once—and the worst of it was, before I could get out again, the other White Knight came and put it on. He thought it was his own helmet.”",
        className: "chapter_text"
      },{
        text: "The knight looked so solemn about it that Alice did not dare to laugh. “I’m afraid you must have hurt him,” she said in a trembling voice, “being on the top of his head.”",
        className: "chapter_text"
      },{
        text: "“I had to kick him, of course,” the Knight said, very seriously. “And then he took the helmet off again—but it took hours and hours to get me out. I was as fast as—as lightning, you know.”",
        className: "chapter_text"
      },{
        text: "“But that’s a different kind of fastness,” Alice objected.",
        className: "chapter_text"
      },{
        text: "The Knight shook his head. “It was all kinds of fastness with me, I can assure you!” he said. He raised his hands in some excitement as he said this, and instantly rolled out of the saddle, and fell headlong into a deep ditch.",
        className: "chapter_text"
      },{
        text: "Alice ran to the side of the ditch to look for him. She was rather startled by the fall, as for some time he had kept on very well, and she was afraid that he really was hurt this time. However, though she could see nothing but the soles of his feet, she was much relieved to hear that he was talking on in his usual tone. “All kinds of fastness,” he repeated: “but it was careless of him to put another man’s helmet on—with the man in it, too.”",
        className: "chapter_text"
      },{
        text: "“How <i>can</i> you go on talking so quietly, head downwards?” Alice asked, as she dragged him out by the feet, and laid him in a heap on the bank.",
        className: "chapter_text"
      },{
        text: "The Knight looked surprised at the question. “What does it matter where my body happens to be?” he said. “My mind goes on working all the same. In fact, the more head downwards I am, the more I keep inventing new things.”",
        className: "chapter_text"
      },{
        text: "“Now the cleverest thing of the sort that I ever did,” he went on after a pause, “was inventing a new pudding during the meat-course.”",
        className: "chapter_text"
      },{
        text: "“In time to have it cooked for the next course?” said Alice. “Well, not the <i>next</i> course,” the Knight said in a slow thoughtful tone: “no, certainly not the next <i>course</i>.”",
        className: "chapter_text"
      },{
        text: "“Then it would have to be the next day. I suppose you wouldn’t have two pudding-courses in one dinner?”",
        className: "chapter_text"
      },{
        text: "“Well, not the <i>next</i> day,” the Knight repeated as before: “not the next <i>day</i>. In fact,” he went on, holding his head down, and his voice getting lower and lower, “I don’t believe that pudding ever was cooked! In fact, I don’t believe that pudding ever <i>will</i> be cooked! And yet it was a very clever pudding to invent.”",
        className: "chapter_text"
      },{
        text: "“What did you mean it to be made of?” Alice asked, hoping to cheer him up, for the poor Knight seemed quite low-spirited about it.",
        className: "chapter_text"
      },{
        text: "“It began with blotting paper,” the Knight answered with a groan.",
        className: "chapter_text"
      },{
        text: "“That wouldn’t be very nice, I’m afraid—”",
        className: "chapter_text"
      },{
        text: "“Not very nice <i>alone</i>,” he interrupted, quite eagerly: “but you’ve no idea what a difference it makes mixing it with other things—such as gunpowder and sealing-wax. And here I must leave you.” They had just come to the end of the wood.",
        className: "chapter_text"
      },{
        text: "Alice could only look puzzled: she was thinking of the pudding.",
        className: "chapter_text"
      },{
        text: "“You are sad,” the Knight said in an anxious tone: “let me sing you a song to comfort you.”",
        className: "chapter_text"
      },{
        text: "“Is it very long?” Alice asked, for she had heard a good deal of poetry that day.",
        className: "chapter_text"
      },{
        text: "“It’s long,” said the Knight, “but very, very beautiful. Everybody that hears me sing it—either it brings the <i>tears</i> into their eyes, or else—”",
        className: "chapter_text"
      },{
        text: "“Or else what?” said Alice, for the Knight had made a sudden pause.",
        className: "chapter_text"
      },{
        text: "“Or else it doesn’t, you know. The name of the song is called ‘<i>Haddocks’ Eyes</i>.’”",
        className: "chapter_text"
      },{
        text: "“Oh, that’s the name of the song, is it?” Alice said, trying to feel interested.",
        className: "chapter_text"
      },{
        text: "“No, you don’t understand,” the Knight said, looking a little vexed. “That’s what the name is <i>called</i>. The name really is ‘<i>The Aged Aged Man</i>.’",
        className: "chapter_text"
      },{
        text: "“Then I ought to have said ‘That’s what the song is called’?” Alice corrected herself.",
        className: "chapter_text"
      },{
        text: "“No, you oughtn’t: that’s quite another thing! The song is called ‘<i>Ways and Means</i>’: but that’s only what it’s <i>called</i>, you know!”",
        className: "chapter_text"
      },{
        text: "“Well, what is the song, then?” said Alice, who was by this time completely bewildered.",
        className: "chapter_text"
      },{
        text: "“I was coming to that,” the Knight said. “The song really is ‘<i>A-sitting On A Gate</i>’: and the tune’s my own invention.”",
        className: "chapter_text"
      },{
        text: "So saying, he stopped his horse and let the reins fall on its neck: then, slowly beating time with one hand, and with a faint smile lighting up his gentle foolish face, as if he enjoyed the music of his song, he began.",
        className: "chapter_text"
      },{
        text: "Of all the strange things that Alice saw in her journey Through The Looking-Glass, this was the one that she always remembered most clearly. Years afterwards she could bring the whole scene back again, as if it had been only yesterday—the mild blue eyes and kindly smile of the Knight—the setting sun gleaming through his hair, and shining on his armour in a blaze of light that quite dazzled her—the horse quietly moving about, with the reins hanging loose on his neck, cropping the grass at her feet—and the black shadows of the forest behind—all this she took in like a picture, as, with one hand shading her eyes, she leant against a tree, watching the strange pair, and listening, in a half dream, to the melancholy music of the song.",
        className: "chapter_text"
      },{
        text: "“But the tune isn’t his own invention,” she said to herself: “it’s ‘I give thee all, <i>I can no more</i>.’” She stood and listened very attentively, but no tears came into her eyes.",
        className: "chapter_text"
      },{
        text: "“I’ll tell thee everything I can;<br/>There’s little to relate.<br/>I saw an aged aged man,<br/>A-sitting on a gate.<br/>‘Who are you, aged man?’ I said,<br/>‘and how is it you live?’<br/>And his answer trickled through my head<br/>Like water through a sieve.",
        className: "chapter_text_cit"
      },{
        text: "He said ‘I look for butterflies<br/>That sleep among the wheat:<br/>I make them into mutton-pies,<br/>And sell them in the street.<br/>I sell them unto men,’ he said,<br/>‘Who sail on stormy seas;<br/>And that’s the way I get my bread—<br/>A trifle, if you please.’",
        className: "chapter_text_cit"
      },{
        text: "But I was thinking of a plan<br/>To dye one’s whiskers green,<br/>And always use so large a fan<br/>That they could not be seen.<br/>So, having no reply to give<br/>To what the old man said,<br/>I cried, ‘Come, tell me how you live!’<br/>And thumped him on the head.",
        className: "chapter_text_cit"
      },{
        text: "His accents mild took up the tale:<br/>He said ‘I go my ways,<br/>And when I find a mountain-rill,<br/>I set it in a blaze;<br/>And thence they make a stuff they call<br/>Rolands’ Macassar Oil—<br/>Yet twopence-halfpenny is all<br/>They give me for my toil.’",
        className: "chapter_text_cit"
      },{
        text: "But I was thinking of a way<br/>To feed oneself on batter,<br/>And so go on from day to day<br/>Getting a little fatter.<br/>I shook him well from side to side,<br/>Until his face was blue:<br/>‘Come, tell me how you live,’ I cried,<br/>‘And what it is you do!’",
        className: "chapter_text_cit"
      },{
        text: "He said ‘I hunt for haddocks’ eyes<br/>Among the heather bright,<br/>And work them into waistcoat-buttons<br/>In the silent night.<br/>And these I do not sell for gold<br/>Or coin of silvery shine<br/>But for a copper halfpenny,<br/>And that will purchase nine.",
        className: "chapter_text_cit"
      },{
        text: "‘I sometimes dig for buttered rolls,<br/>Or set limed twigs for crabs;<br/>I sometimes search the grassy knolls<br/>For wheels of Hansom-cabs.<br/>And that’s the way’ (he gave a wink)<br/>‘By which I get my wealth—<br/>And very gladly will I drink<br/>Your Honour’s noble health.’",
        className: "chapter_text_cit"
      },{
        text: "I heard him then, for I had just<br/>Completed my design<br/>To keep the Menai bridge from rust<br/>By boiling it in wine.<br/>I thanked him much for telling me<br/>The way he got his wealth,<br/>But chiefly for his wish that he<br/>Might drink my noble health.",
        className: "chapter_text_cit"
      },{
        text: "And now, if e’er by chance I put<br/>My fingers into glue<br/>Or madly squeeze a right-hand foot<br/>Into a left-hand shoe,<br/>Or if I drop upon my toe<br/>A very heavy weight,<br/>I weep, for it reminds me so,<br/>Of that old man I used to know—<br/>Whose look was mild, whose speech was slow,<br/>Whose hair was whiter than the snow,<br/>Whose face was very like a crow,<br/>With eyes, like cinders, all aglow,<br/>Who seemed distracted with his woe,<br/>Who rocked his body to and fro,<br/>And muttered mumblingly and low,<br/>As if his mouth were full of dough,<br/>Who snorted like a buffalo—<br/>That summer evening, long ago,<br/>A-sitting on a gate.”",
        className: "chapter_text_cit"
      },{
        text: "As the Knight sang the last words of the ballad, he gathered up the reins, and turned his horse’s head along the road by which they had come. “You’ve only a few yards to go,” he said, “down the hill and over that little brook, and then you’ll be a Queen—But you’ll stay and see me off first?” he added as Alice turned with an eager look in the direction to which he pointed. “I shan’t be long. You’ll wait and wave your handkerchief when I get to that turn in the road? I think it’ll encourage me, you see.”",
        className: "chapter_text"
      },{
        text: "“Of course I’ll wait,” said Alice: “and thank you very much for coming so far—and for the song—I liked it very much.”",
        className: "chapter_text"
      },{
        text: "“I hope so,” the Knight said doubtfully: “but you didn’t cry so much as I thought you would.”",
        className: "chapter_text"
      },{
        text: "So they shook hands, and then the Knight rode slowly away into the forest. “It won’t take long to see him off, I expect,” Alice said to herself, as she stood watching him. “There he goes! Right on his head as usual! However, he gets on again pretty easily—that comes of having so many things hung round the horse—” So she went on talking to herself, as she watched the horse walking leisurely along the road, and the Knight tumbling off, first on one side and then on the other. After the fourth or fifth tumble he reached the turn, and then she waved her handkerchief to him, and waited till he was out of sight.",
        className: "chapter_text"
      },{
        text: "“I hope it encouraged him,” she said, as she turned to run down the hill: “and now for the last brook, and to be a Queen! How grand it sounds!” A very few steps brought her to the edge of the brook. “The Eighth Square at last!” she cried as she bounded across,",
        className: "chapter_text"
      },{
        text: "* * * ",
        className: "chapter_text_space"
      },{
        text: "and threw herself down to rest on a lawn as soft as moss, with little flower-beds dotted about it here and there. “Oh, how glad I am to get here! And what is this on my head?” she exclaimed in a tone of dismay, as she put her hands up to something very heavy, and fitted tight all round her head.",
        className: "chapter_text"
      },{
        text: "“But how can it have got there without my knowing it?” she said to herself, as she lifted it off, and set it on her lap to make out what it could possibly be.",
        className: "chapter_text"
      },{
        text: "It was a golden crown.",
        className: "chapter_text"
      }
    ]),

    9: createChapter("Queen Alice", "IX", "https://placehold.co/25", [
      {
        text: "“Well, this is grand!” said Alice. “I never expected I should be a Queen so soon—and I’ll tell you what it is, your majesty,” she went on in a severe tone (she was always rather fond of scolding herself), “it’ll never do for you to be lolling about on the grass like that! Queens have to be dignified, you know!”",
        className: "chapter_text"
      },{
        text: "So she got up and walked about—rather stiffly just at first, as she was afraid that the crown might come off: but she comforted herself with the thought that there was nobody to see her, “and if I really am a Queen,” she said as she sat down again, “I shall be able to manage it quite well in time.”",
        className: "chapter_text"
      },{
        text: "Everything was happening so oddly that she didn’t feel a bit surprised at finding the Red Queen and the White Queen sitting close to her, one on each side: she would have liked very much to ask them how they came there, but she feared it would not be quite civil. However, there would be no harm, she thought, in asking if the game was over. “Please, would you tell me—” she began, looking timidly at the Red Queen.",
        className: "chapter_text"
      },{
        text: "“Speak when you’re spoken to!” The Queen sharply interrupted her.",
        className: "chapter_text"
      },{
        text: "“But if everybody obeyed that rule,” said Alice, who was always ready for a little argument, “and if you only spoke when you were spoken to, and the other person always waited for you to begin, you see nobody would ever say anything, so that—”",
        className: "chapter_text"
      },{
        text: "“Ridiculous!” cried the Queen. “Why, don’t you see, child—” here she broke off with a frown, and, after thinking for a minute, suddenly changed the subject of the conversation. “What do you mean by ‘If you really are a Queen’? What right have you to call yourself so? You can’t be a Queen, you know, till you’ve passed the proper examination. And the sooner we begin it, the better.”",
        className: "chapter_text"
      },{
        text: "“I only said ‘if’!” poor Alice pleaded in a piteous tone.",
        className: "chapter_text"
      },{
        text: "The two Queens looked at each other, and the Red Queen remarked, with a little shudder, “She says she only said ‘if’—”",
        className: "chapter_text"
      },{
        text: "“But she said a great deal more than that!” the White Queen moaned, wringing her hands. “Oh, ever so much more than that!”",
        className: "chapter_text"
      },{
        text: "“So you did, you know,” the Red Queen said to Alice. “Always speak the truth—think before you speak—and write it down afterwards.”",
        className: "chapter_text"
      },{
        text: "“I’m sure I didn’t mean—” Alice was beginning, but the Red Queen interrupted her impatiently.",
        className: "chapter_text"
      },{
        text: "“That’s just what I complain of! You should have meant! What do you suppose is the use of child without any meaning? Even a joke should have some meaning—and a child’s more important than a joke, I hope. You couldn’t deny that, even if you tried with both hands.”",
        className: "chapter_text"
      },{
        text: "“I don’t deny things with my hands,” Alice objected.",
        className: "chapter_text"
      },{
        text: "“Nobody said you did,” said the Red Queen. “I said you couldn’t if you tried.”",
        className: "chapter_text"
      },{
        text: "“She’s in that state of mind,” said the White Queen, “that she wants to deny <i>something</i>—only she doesn’t know what to deny!”",
        className: "chapter_text"
      },{
        text: "“A nasty, vicious temper,” the Red Queen remarked; and then there was an uncomfortable silence for a minute or two.",
        className: "chapter_text"
      },{
        text: "The Red Queen broke the silence by saying to the White Queen, “I invite you to Alice’s dinner-party this afternoon.”",
        className: "chapter_text"
      },{
        text: "The White Queen smiled feebly, and said “And I invite <i>you</i>.”",
        className: "chapter_text"
      },{
        text: "I didn’t know I was to have a party at all,” said Alice; “but if there is to be one, I think I ought to invite the guests.”",
        className: "chapter_text"
      },{
        text: "“We gave you the opportunity of doing it,” the Red Queen remarked: “but I daresay you’ve not had many lessons in manners yet?”",
        className: "chapter_text"
      },{
        text: "“Manners are not taught in lessons,” said Alice. “Lessons teach you to do sums, and things of that sort.”",
        className: "chapter_text"
      },{
        text: "“And you do Addition?” the White Queen asked. “What’s one and one and one and one and one and one and one and one and one and one?”",
        className: "chapter_text"
      },{
        text: "“I don’t know,” said Alice. “I lost count.”",
        className: "chapter_text"
      },{
        text: "“She can’t do Addition,” the Red Queen interrupted. “Can you do Subtraction? Take nine from eight.”",
        className: "chapter_text"
      },{
        text: "“Nine from eight I can’t, you know,” Alice replied very readily: “but—”",
        className: "chapter_text"
      },{
        text: "“She can’t do Subtraction,” said the White Queen. “Can you do Division? Divide a loaf by a knife—what’s the answer to that?”",
        className: "chapter_text"
      },{
        text: "“I suppose—” Alice was beginning, but the Red Queen answered for her. “Bread-and-butter, of course. Try another Subtraction sum. Take a bone from a dog: what remains?”",
        className: "chapter_text"
      },{
        text: "Alice considered. “The bone wouldn’t remain, of course, if I took it—and the dog wouldn’t remain; it would come to bite me—and I’m sure I shouldn’t remain!”",
        className: "chapter_text"
      },{
        text: "“Then you think nothing would remain?” said the Red Queen.",
        className: "chapter_text"
      },{
        text: "“I think that’s the answer.”",
        className: "chapter_text"
      },{
        text: "“Wrong, as usual,” said the Red Queen: “the dog’s temper would remain.”",
        className: "chapter_text"
      },{
        text: "“But I don’t see how—”",
        className: "chapter_text"
      },{
        text: "“Why, look here!” the Red Queen cried. “The dog would lose its temper, wouldn’t it?”",
        className: "chapter_text"
      },{
        text: "“Perhaps it would,” Alice replied cautiously.",
        className: "chapter_text"
      },{
        text: "“Then if the dog went away, its temper would remain!” the Queen exclaimed triumphantly.",
        className: "chapter_text"
      },{
        text: "Alice said, as gravely as she could, “They might go different ways.” But she couldn’t help thinking to herself, “What dreadful nonsense we are talking!”",
        className: "chapter_text"
      },{
        text: "“She can’t do sums a bit!” the Queens said together, with great emphasis.",
        className: "chapter_text"
      },{
        text: "“Can you do sums?” Alice said, turning suddenly on the White Queen, for she didn’t like being found fault with so much.",
        className: "chapter_text"
      },{
        text: "The Queen gasped and shut her eyes. “I can do Addition, if you give me time—but I can’t do Subtraction, under any circumstances!”",
        className: "chapter_text"
      },{
        text: "“Of course you know your A B C?” said the Red Queen.",
        className: "chapter_text"
      },{
        text: "“To be sure I do.” said Alice.",
        className: "chapter_text"
      },{
        text: "“So do I,” the White Queen whispered: “we’ll often say it over together, dear. And I’ll tell you a secret—I can read words of one letter! Isn’t that grand! However, don’t be discouraged. You’ll come to it in time.”",
        className: "chapter_text"
      },{
        text: "Here the Red Queen began again. “Can you answer useful questions?” she said. “How is bread made?”",
        className: "chapter_text"
      },{
        text: "“I know that!” Alice cried eagerly. “You take some flour—”",
        className: "chapter_text"
      },{
        text: "“Where do you pick the flower?” the White Queen asked. “In a garden, or in the hedges?”",
        className: "chapter_text"
      },{
        text: "“Well, it isn’t picked at all,” Alice explained: “it’s ground—”",
        className: "chapter_text"
      },{
        text: "“How many acres of ground?” said the White Queen. “You mustn’t leave out so many things.”",
        className: "chapter_text"
      },{
        text: "“Fan her head!” the Red Queen anxiously interrupted. “She’ll be feverish after so much thinking.” So they set to work and fanned her with bunches of leaves, till she had to beg them to leave off, it blew her hair about so.",
        className: "chapter_text"
      },{
        text: "“She’s all right again now,” said the Red Queen. “Do you know Languages? What’s the French for fiddle-de-dee?”",
        className: "chapter_text"
      },{
        text: "“Fiddle-de-dee’s not English,” Alice replied gravely.",
        className: "chapter_text"
      },{
        text: "“Who ever said it was?” said the Red Queen.",
        className: "chapter_text"
      },{
        text: "Alice thought she saw a way out of the difficulty this time. “If you’ll tell me what language ‘fiddle-de-dee’ is, I’ll tell you the French for it!” she exclaimed triumphantly.",
        className: "chapter_text"
      },{
        text: "But the Red Queen drew herself up rather stiffly, and said “Queens never make bargains.”",
        className: "chapter_text"
      },{
        text: "“I wish Queens never asked questions,” Alice thought to herself.",
        className: "chapter_text"
      },{
        text: "“Don’t let us quarrel,” the White Queen said in an anxious tone. “What is the cause of lightning?”",
        className: "chapter_text"
      },{
        text: "“The cause of lightning,” Alice said very decidedly, for she felt quite certain about this, “is the thunder—no, no!” she hastily corrected herself. “I meant the other way.”",
        className: "chapter_text"
      },{
        text: "“It’s too late to correct it,” said the Red Queen: “when you’ve once said a thing, that fixes it, and you must take the consequences.”",
        className: "chapter_text"
      },{
        text: "“Which reminds me—” the White Queen said, looking down and nervously clasping and unclasping her hands, “we had such a thunderstorm last Tuesday—I mean one of the last set of Tuesdays, you know.”",
        className: "chapter_text"
      },{
        text: "Alice was puzzled. “In our country,” she remarked, “there’s only one day at a time.”",
        className: "chapter_text"
      },{
        text: "The Red Queen said, “That’s a poor thin way of doing things. Now here, we mostly have days and nights two or three at a time, and sometimes in the winter we take as many as five nights together—for warmth, you know.”",
        className: "chapter_text"
      },{
        text: "“Are five nights warmer than one night, then?” Alice ventured to ask.",
        className: "chapter_text"
      },{
        text: "“Five times as warm, of course.”",
        className: "chapter_text"
      },{
        text: "“But they should be five times as cold, by the same rule—”",
        className: "chapter_text"
      },{
        text: "“Just so!” cried the Red Queen. “Five times as warm, and five times as cold—just as I’m five times as rich as you are, and five times as clever!”",
        className: "chapter_text"
      },{
        text: "Alice sighed and gave it up. “It’s exactly like a riddle with no answer!” she thought.",
        className: "chapter_text"
      },{
        text: "“Humpty Dumpty saw it too,” the White Queen went on in a low voice, more as if she were talking to herself. “He came to the door with a corkscrew in his hand—”",
        className: "chapter_text"
      },{
        text: "“What did he want?” said the Red Queen.",
        className: "chapter_text"
      },{
        text: "“He said he would come in,” the White Queen went on, “because he was looking for a hippopotamus. Now, as it happened, there wasn’t such a thing in the house, that morning.”",
        className: "chapter_text"
      },{
        text: "“Is there generally?” Alice asked in an astonished tone.",
        className: "chapter_text"
      },{
        text: "“Well, only on Thursdays,” said the Queen.",
        className: "chapter_text"
      },{
        text: "“I know what he came for,” said Alice: “he wanted to punish the fish, because—”",
        className: "chapter_text"
      },{
        text: "Here the White Queen began again. “It was such a thunderstorm, you can’t think!” (“She never could, you know,” said the Red Queen.) “And part of the roof came off, and ever so much thunder got in—and it went rolling round the room in great lumps—and knocking over the tables and things—till I was so frightened, I couldn’t remember my own name!”",
        className: "chapter_text"
      },{
        text: "Alice thought to herself, “I never should try to remember my name in the middle of an accident! Where would be the use of it?” but she did not say this aloud, for fear of hurting the poor Queen’s feeling.",
        className: "chapter_text"
      },{
        text: "“Your Majesty must excuse her,” the Red Queen said to Alice, taking one of the White Queen’s hands in her own, and gently stroking it: “she means well, but she can’t help saying foolish things, as a general rule.”",
        className: "chapter_text"
      },{
        text: "The White Queen looked timidly at Alice, who felt she ought to say something kind, but really couldn’t think of anything at the moment.",
        className: "chapter_text"
      },{
        text: "“She never was really well brought up,” the Red Queen went on: “but it’s amazing how good-tempered she is! Pat her on the head, and see how pleased she’ll be!” But this was more than Alice had courage to do.",
        className: "chapter_text"
      },{
        text: "“A little kindness—and putting her hair in papers—would do wonders with her—”",
        className: "chapter_text"
      },{
        text: "The White Queen gave a deep sigh, and laid her head on Alice’s shoulder. “I am so sleepy?” she moaned.",
        className: "chapter_text"
      },{
        text: "“She’s tired, poor thing!” said the Red Queen. “Smooth her hair—lend her your nightcap—and sing her a soothing lullaby.”",
        className: "chapter_text"
      },{
        text: "“I haven’t got a nightcap with me,” said Alice, as she tried to obey the first direction: “and I don’t know any soothing lullabies.”",
        className: "chapter_text"
      },{
        text: "“I must do it myself, then,” said the Red Queen, and she began:",
        className: "chapter_text"
      },{
        text: "“Hush-a-by lady, in Alice’s lap!<br/>Till the feast’s ready, we’ve time for a nap:<br/>When the feast’s over, we’ll go to the ball—<br/>Red Queen, and White Queen, and Alice, and all!",
        className: "chapter_text_cit"
      },{
        text: "“And now you know the words,” she added, as she put her head down on Alice’s other shoulder, “just sing it through to me. I’m getting sleepy, too.” In another moment both Queens were fast asleep, and snoring loud.",
        className: "chapter_text"
      },{
        text: "“What am I to do?” exclaimed Alice, looking about in great perplexity, as first one round head, and then the other, rolled down from her shoulder, and lay like a heavy lump in her lap. “I don’t think it ever happened before, that any one had to take care of two Queens asleep at once! No, not in all the History of England—it couldn’t, you know, because there never was more than one Queen at a time. Do wake up, you heavy things!” she went on in an impatient tone; but there was no answer but a gentle snoring.",
        className: "chapter_text"
      },{
        text: "The snoring got more distinct every minute, and sounded more like a tune: at last she could even make out the words, and she listened so eagerly that, when the two great heads vanished from her lap, she hardly missed them.",
        className: "chapter_text"
      },{
        text: "She was standing before an arched doorway over which were the words QUEEN ALICE in large letters, and on each side of the arch there was a bell-handle; one was marked “Visitors’ Bell,” and the other “Servants’ Bell.”",
        className: "chapter_text"
      },{
        text: "“I’ll wait till the song’s over,” thought Alice, “and then I’ll ring—the—which bell must I ring?” she went on, very much puzzled by the names. “I’m not a visitor, and I’m not a servant. There ought to be one marked ‘Queen,’ you know—”",
        className: "chapter_text"
      },{
        text: "Just then the door opened a little way, and a creature with a long beak put its head out for a moment and said “No admittance till the week after next!” and shut the door again with a bang.",
        className: "chapter_text"
      },{
        text: "Alice knocked and rang in vain for a long time, but at last, a very old Frog, who was sitting under a tree, got up and hobbled slowly towards her: he was dressed in bright yellow, and had enormous boots on.",
        className: "chapter_text"
      },{
        text: "“What is it, now?” the Frog said in a deep hoarse whisper.",
        className: "chapter_text"
      },{
        text: "Alice turned round, ready to find fault with anybody. “Where’s the servant whose business it is to answer the door?” she began angrily.",
        className: "chapter_text"
      },{
        text: "“Which door?” said the Frog.",
        className: "chapter_text"
      },{
        text: "Alice almost stamped with irritation at the slow drawl in which he spoke. “This door, of course!”",
        className: "chapter_text"
      },{
        text: "The Frog looked at the door with his large dull eyes for a minute: then he went nearer and rubbed it with his thumb, as if he were trying whether the paint would come off; then he looked at Alice.",
        className: "chapter_text"
      },{
        text: "“To answer the door?” he said. “What’s it been asking of?” He was so hoarse that Alice could scarcely hear him",
        className: "chapter_text"
      },{
        text: "“I don’t know what you mean,” she said.",
        className: "chapter_text"
      },{
        text: "“I talks English, doesn’t I?” the Frog went on. “Or are you deaf? What did it ask you?”",
        className: "chapter_text"
      },{
        text: "“Nothing!” Alice said impatiently. “I’ve been knocking at it!”",
        className: "chapter_text"
      },{
        text: "“Shouldn’t do that—shouldn’t do that—” the Frog muttered. “Vexes it, you know.” Then he went up and gave the door a kick with one of his great feet. “You let it alone,” he panted out, as he hobbled back to his tree, “and it’ll let you alone, you know.”",
        className: "chapter_text"
      },{
        text: "At this moment the door was flung open, and a shrill voice was heard singing:",
        className: "chapter_text"
      },{
        text: "“To the Looking-Glass world it was Alice that said,<br/>‘I’ve a sceptre in hand, I’ve a crown on my head;<br/>Let the Looking-Glass creatures, whatever they be,<br/>Come and dine with the Red Queen, the White Queen, and me.’”",
        className: "chapter_text_cit"
      },{
        text: "And hundreds of voices joined in the chorus:",
        className: "chapter_text"
      },{
        text: "“Then fill up the glasses as quick as you can,<br/>And sprinkle the table with buttons and bran:<br/>Put cats in the coffee, and mice in the tea—<br/>And welcome Queen Alice with thirty-times-three!”",
        className: "chapter_text_cit"
      },{
        text: "Then followed a confused noise of cheering, and Alice thought to herself, “Thirty times three makes ninety. I wonder if any one’s counting?” In a minute there was silence again, and the same shrill voice sang another verse;",
        className: "chapter_text"
      },{
        text: "“‘O Looking-Glass creatures,’ quoth Alice, ‘draw near!<br/>’Tis an honour to see me, a favour to hear:<br/>’Tis a privilege high to have dinner and tea<br/>Along with the Red Queen, the White Queen, and me!’”",
        className: "chapter_text_cit"
      },{
        text: "Then came the chorus again:—",
        className: "chapter_text"
      },{
        text: "“Then fill up the glasses with treacle and ink,<br/>Or anything else that is pleasant to drink:<br/>Mix sand with the cider, and wool with the wine—<br/>And welcome Queen Alice with ninety-times-nine!”",
        className: "chapter_text_cit"
      },{
        text: "“Ninety times nine!” Alice repeated in despair, “Oh, that’ll never be done! I’d better go in at once—” and there was a dead silence the moment she appeared.",
        className: "chapter_text"
      },{
        text: "Alice glanced nervously along the table, as she walked up the large hall, and noticed that there were about fifty guests, of all kinds: some were animals, some birds, and there were even a few flowers among them. “I’m glad they’ve come without waiting to be asked,” she thought: “I should never have known who were the right people to invite!”",
        className: "chapter_text"
      },{
        text: "There were three chairs at the head of the table; the Red and White Queens had already taken two of them, but the middle one was empty. Alice sat down in it, rather uncomfortable in the silence, and longing for some one to speak.",
        className: "chapter_text"
      },{
        text: "At last the Red Queen began. “You’ve missed the soup and fish,” she said. “Put on the joint!” And the waiters set a leg of mutton before Alice, who looked at it rather anxiously, as she had never had to carve a joint before.",
        className: "chapter_text"
      },{
        text: "“You look a little shy; let me introduce you to that leg of mutton,” said the Red Queen. “Alice—Mutton; Mutton—Alice.” The leg of mutton got up in the dish and made a little bow to Alice; and Alice returned the bow, not knowing whether to be frightened or amused.",
        className: "chapter_text"
      },{
        text: "“May I give you a slice?” she said, taking up the knife and fork, and looking from one Queen to the other.",
        className: "chapter_text"
      },{
        text: "“Certainly not,” the Red Queen said, very decidedly: “it isn’t etiquette to cut any one you’ve been introduced to. Remove the joint!” And the waiters carried it off, and brought a large plum-pudding in its place.",
        className: "chapter_text"
      },{
        text: "“I won’t be introduced to the pudding, please,” Alice said rather hastily, “or we shall get no dinner at all. May I give you some?”",
        className: "chapter_text"
      },{
        text: "But the Red Queen looked sulky, and growled “Pudding—Alice; Alice—Pudding. Remove the pudding!” and the waiters took it away so quickly that Alice couldn’t return its bow.",
        className: "chapter_text"
      },{
        text: "However, she didn’t see why the Red Queen should be the only one to give orders, so, as an experiment, she called out “Waiter! Bring back the pudding!” and there it was again in a moment like a conjuring-trick. It was so large that she couldn’t help feeling a little shy with it, as she had been with the mutton; however, she conquered her shyness by a great effort and cut a slice and handed it to the Red Queen.",
        className: "chapter_text"
      },{
        text: "“What impertinence!” said the Pudding. “I wonder how you’d like it, if I were to cut a slice out of you, you creature!”",
        className: "chapter_text"
      },{
        text: "It spoke in a thick, suety sort of voice, and Alice hadn’t a word to say in reply: she could only sit and look at it and gasp.",
        className: "chapter_text"
      },{
        text: "“Make a remark,” said the Red Queen: “it’s ridiculous to leave all the conversation to the pudding!”",
        className: "chapter_text"
      },{
        text: "“Do you know, I’ve had such a quantity of poetry repeated to me to-day,” Alice began, a little frightened at finding that, the moment she opened her lips, there was dead silence, and all eyes were fixed upon her; “and it’s a very curious thing, I think—every poem was about fishes in some way. Do you know why they’re so fond of fishes, all about here?”",
        className: "chapter_text"
      },{
        text: "She spoke to the Red Queen, whose answer was a little wide of the mark. “As to fishes,” she said, very slowly and solemnly, putting her mouth close to Alice’s ear, “her White Majesty knows a lovely riddle—all in poetry—all about fishes. Shall she repeat it?”",
        className: "chapter_text"
      },{
        text: "“Her Red Majesty’s very kind to mention it,” the White Queen murmured into Alice’s other ear, in a voice like the cooing of a pigeon. “It would be such a treat! May I?”",
        className: "chapter_text"
      },{
        text: "“Please do,” Alice said very politely.",
        className: "chapter_text"
      },{
        text: "The White Queen laughed with delight, and stroked Alice’s cheek. Then she began:",
        className: "chapter_text"
      },{
        text: "“‘First, the fish must be caught.’<br/>That is easy: a baby, I think, could have caught it.<br/>‘Next, the fish must be bought.’<br/>That is easy: a penny, I think, would have bought it.",
        className: "chapter_text_cit"
      },{
        text: "‘Now cook me the fish!’<br/>That is easy, and will not take more than a minute.<br/>‘Let it lie in a dish!’<br/>That is easy, because it already is in it.",
        className: "chapter_text_cit"
      },{
        text: " ‘Bring it here! Let me sup!’<br/>It is easy to set such a dish on the table.<br/>‘Take the dish-cover up!’<br/>Ah, that is so hard that I fear I’m unable!",
        className: "chapter_text_cit"
      },{
        text: " For it holds it like glue—<br/>Holds the lid to the dish, while it lies in the middle:<br/>Which is easiest to do,<br/>Un-dish-cover the fish, or dishcover the riddle?”",
        className: "chapter_text_cit"
      },{
        text: "“Take a minute to think about it, and then guess,” said the Red Queen. “Meanwhile, we’ll drink your health—Queen Alice’s health!” she screamed at the top of her voice, and all the guests began drinking it directly, and very queerly they managed it: some of them put their glasses upon their heads like extinguishers, and drank all that trickled down their faces—others upset the decanters, and drank the wine as it ran off the edges of the table—and three of them (who looked like kangaroos) scrambled into the dish of roast mutton, and began eagerly lapping up the gravy, “just like pigs in a trough!” thought Alice.",
        className: "chapter_text"
      },{
        text: "“You ought to return thanks in a neat speech,” the Red Queen said, frowning at Alice as she spoke.",
        className: "chapter_text"
      },{
        text: "“We must support you, you know,” the White Queen whispered, as Alice got up to do it, very obediently, but a little frightened.",
        className: "chapter_text"
      },{
        text: "“Thank you very much,” she whispered in reply, “but I can do quite well without.”",
        className: "chapter_text"
      },{
        text: "“That wouldn’t be at all the thing,” the Red Queen said very decidedly: so Alice tried to submit to it with a good grace.",
        className: "chapter_text"
      },{
        text: "(“And they did push so!” she said afterwards, when she was telling her sister the history of the feast. “You would have thought they wanted to squeeze me flat!”)",
        className: "chapter_text"
      },{
        text: "In fact it was rather difficult for her to keep in her place while she made her speech: the two Queens pushed her so, one on each side, that they nearly lifted her up into the air: “I rise to return thanks—” Alice began: and she really did rise as she spoke, several inches; but she got hold of the edge of the table, and managed to pull herself down again.",
        className: "chapter_text"
      },{
        text: "“Take care of yourself!” screamed the White Queen, seizing Alice’s hair with both her hands. “Something’s going to happen!”",
        className: "chapter_text"
      },{
        text: "And then (as Alice afterwards described it) all sorts of things happened in a moment. The candles all grew up to the ceiling, looking something like a bed of rushes with fireworks at the top. As to the bottles, they each took a pair of plates, which they hastily fitted on as wings, and so, with forks for legs, went fluttering about in all directions: “and very like birds they look,” Alice thought to herself, as well as she could in the dreadful confusion that was beginning.",
        className: "chapter_text"
      },{
        text: "At this moment she heard a hoarse laugh at her side, and turned to see what was the matter with the White Queen; but, instead of the Queen, there was the leg of mutton sitting in the chair. “Here I am!” cried a voice from the soup tureen, and Alice turned again, just in time to see the Queen’s broad good-natured face grinning at her for a moment over the edge of the tureen, before she disappeared into the soup.",
        className: "chapter_text"
      },{
        text: "There was not a moment to be lost. Already several of the guests were lying down in the dishes, and the soup ladle was walking up the table towards Alice’s chair, and beckoning to her impatiently to get out of its way.",
        className: "chapter_text"
      },{
        text: "“I can’t stand this any longer!” she cried as she jumped up and seized the table-cloth with both hands: one good pull, and plates, dishes, guests, and candles came crashing down together in a heap on the floor.",
        className: "chapter_text"
      },{
        text: "“And as for you,” she went on, turning fiercely upon the Red Queen, whom she considered as the cause of all the mischief—but the Queen was no longer at her side—she had suddenly dwindled down to the size of a little doll, and was now on the table, merrily running round and round after her own shawl, which was trailing behind her.",
        className: "chapter_text"
      },{
        text: "At any other time, Alice would have felt surprised at this, but she was far too much excited to be surprised at anything now. “As for you,” she repeated, catching hold of the little creature in the very act of jumping over a bottle which had just lighted upon the table, “I’ll shake you into a kitten, that I will!”",
        className: "chapter_text"
      }
    ]),

    10: createChapter("Shaking", "X", "https://placehold.co/25", [
      {
        text: "She took her off the table as she spoke, and shook her backwards and forwards with all her might.",
        className: "chapter_text"
      },{
        text: "The Red Queen made no resistance whatever; only her face grew very small, and her eyes got large and green: and still, as Alice went on shaking her, she kept on growing shorter—and fatter—and softer—and rounder—and—",
        className: "chapter_text"
      }
    ]),

    11: createChapter("Waking", "XI", "https://placehold.co/25", [
      {
        text: "—and it really was a kitten, after all.",
        className: "chapter_text"
      }
    ]),

    12: createChapter("Which Dreamed It?", "XII", "https://placehold.co/25", [
      {
        text: "“Your majesty shouldn’t purr so loud,” Alice said, rubbing her eyes, and addressing the kitten, respectfully, yet with some severity. “You woke me out of oh! such a nice dream! And you’ve been along with me, Kitty—all through the Looking-Glass world. Did you know it, dear?”",
        className: "chapter_text"
      },{
        text: "It is a very inconvenient habit of kittens (Alice had once made the remark) that, whatever you say to them, they <i>always</i> purr. “If they would only purr for ‘yes’ and mew for ‘no,’ or any rule of that sort,” she had said, “so that one could keep up a conversation! But how <i>can</i> you talk with a person if they always say the same thing?”",
        className: "chapter_text"
      },{
        text: "On this occasion the kitten only purred: and it was impossible to guess whether it meant “yes” or “no.”",
        className: "chapter_text"
      },{
        text: "So Alice hunted among the chessmen on the table till she had found the Red Queen: then she went down on her knees on the hearth-rug, and put the kitten and the Queen to look at each other. “Now, Kitty!” she cried, clapping her hands triumphantly. “Confess that was what you turned into!”",
        className: "chapter_text"
      },{
        text: "(“But it wouldn’t look at it,” she said, when she was explaining the thing afterwards to her sister: “it turned away its head, and pretended not to see it: but it looked a <i>little</i> ashamed of itself, so I think it <i>must</i> have been the Red Queen.”)",
        className: "chapter_text"
      },{
        text: "“Sit up a little more stiffly, dear!” Alice cried with a merry laugh. “And curtsey while you’re thinking what to—what to purr. It saves time, remember!” And she caught it up and gave it one little kiss, “just in honour of having been a Red Queen.”",
        className: "chapter_text"
      },{
        text: "“Snowdrop, my pet!” she went on, looking over her shoulder at the White Kitten, which was still patiently undergoing its toilet, “when <i>will</i> Dinah have finished with your White Majesty, I wonder? That must be the reason you were so untidy in my dream—Dinah! do you know that you’re scrubbing a White Queen? Really, it’s most disrespectful of you!",
        className: "chapter_text"
      },{
        text: "“And what did <i>Dinah</i> turn to, I wonder?” she prattled on, as she settled comfortably down, with one elbow in the rug, and her chin in her hand, to watch the kittens. “Tell me, Dinah, did you turn to Humpty Dumpty? I <i>think</i> you did—however, you’d better not mention it to your friends just yet, for I’m not sure.",
        className: "chapter_text"
      },{
        text: "“By the way, Kitty, if only you’d been really with me in my dream, there was one thing you would have enjoyed—I had such a quantity of poetry said to me, all about fishes! To-morrow morning you shall have a real treat. All the time you’re eating your breakfast, I’ll repeat ‘The Walrus and the Carpenter’ to you; and then you can make believe it’s oysters, dear!",
        className: "chapter_text"
      },{
        text: "“Now, Kitty, let’s consider who it was that dreamed it all. This is a serious question, my dear, and you should not go on licking your paw like that—as if Dinah hadn’t washed you this morning! You see, Kitty, it must have been either me or the Red King. He was part of my dream, of course—but then I was part of his dream, too! Was it the Red King, Kitty? You were his wife, my dear, so you ought to know—Oh, Kitty, do help to settle it! I’m sure your paw can wait!” But the provoking kitten only began on the other paw, and pretended it hadn’t heard the question.",
        className: "chapter_text"
      },{
        text: "Which do <i>you</i> think it was?",
        className: "chapter_text"
      }
    ])
}

export default chapters;