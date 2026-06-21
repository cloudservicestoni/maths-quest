/*
 * Metric Conversions — Self-study lessons (basics → challenging)
 * Topic for UK 11+ grammar school maths.
 *
 * Key facts used throughout:
 *   Length:   10 mm = 1 cm,  100 cm = 1 m,  1000 m = 1 km,  1000 mm = 1 m
 *   Mass:     1000 g = 1 kg
 *   Capacity: 1000 ml = 1 litre (L)
 */

import type { Lesson } from '../../types/content';

export const metricLessons: Lesson[] = [
  {
    id: 'metric-lesson-1',
    topicId: 'metric',
    topicTitle: 'Metric Conversions',
    topicDescription: '11+ practice — length, mass and capacity. Learn it first, then test yourself.',
    order: 1,
    level: '⭐',
    title: 'Lesson 1 — Units & the ×10, ×100, ×1000 Rule',
    summary: 'What metric units are, and how to switch between them.',
    sections: [
      {
        type: 'note',
        heading: 'What are metric units?',
        body:
          'Metric units measure three main things:' +
          '<ul>' +
          '<li><b>Length</b> — millimetres (mm), centimetres (cm), metres (m), kilometres (km)</li>' +
          '<li><b>Mass</b> (weight) — grams (g), kilograms (kg)</li>' +
          '<li><b>Capacity</b> (how much a container holds) — millilitres (ml), litres (L)</li>' +
          '</ul>',
      },
      {
        type: 'note',
        heading: 'The golden rule',
        body:
          'Going from a <b>BIG unit to a SMALL unit → MULTIPLY</b> (the number gets bigger).<br>' +
          'Going from a <b>SMALL unit to a BIG unit → DIVIDE</b> (the number gets smaller).<br><br>' +
          'Think: 1 metre is a big step, 1 centimetre is a tiny step — so one metre is worth ' +
          '<b>lots</b> of centimetres (100 of them).',
      },
      {
        type: 'note',
        heading: 'The length ladder',
        body: 'Each step changes the number by ×10, ×100 or ×1000. Going right you multiply; going left you divide.',
        diagram: { type: 'conversionChain', data: { units: ['km', 'm', 'cm', 'mm'], factors: [1000, 100, 10] } },
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '5 cm → mm: cm is bigger than mm, so multiply by 10 → 5 × 10 = <b>50 mm</b>',
          '3 m → cm: multiply by 100 → 3 × 100 = <b>300 cm</b>',
          '2000 m → km: m is smaller than km, so divide by 1000 → 2000 ÷ 1000 = <b>2 km</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Your turn — bigger to smaller (multiply)',
        parts: [
          { id: 'm1p1a', label: '7 cm = ___ mm', type: 'number', answer: 70, answerDisplay: '70 mm', explanation: '7 × 10 = 70.' },
          { id: 'm1p1b', label: '4 m = ___ cm', type: 'number', answer: 400, answerDisplay: '400 cm', explanation: '4 × 100 = 400.' },
          { id: 'm1p1c', label: '2 km = ___ m', type: 'number', answer: 2000, answerDisplay: '2000 m', explanation: '2 × 1000 = 2000.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Smaller to bigger (divide)',
        parts: [
          { id: 'm1p2a', label: '50 mm = ___ cm', type: 'number', answer: 5, answerDisplay: '5 cm', explanation: '50 ÷ 10 = 5.' },
          { id: 'm1p2b', label: '600 cm = ___ m', type: 'number', answer: 6, answerDisplay: '6 m', explanation: '600 ÷ 100 = 6.' },
          { id: 'm1p2c', label: '3000 m = ___ km', type: 'number', answer: 3, answerDisplay: '3 km', explanation: '3000 ÷ 1000 = 3.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Which operation?',
        parts: [
          { id: 'm1p3', label: 'To change metres into centimetres you…', type: 'choice', options: ['Multiply by 100', 'Divide by 100', 'Multiply by 10', 'Multiply by 1000'], answer: 'Multiply by 100', answerDisplay: 'Multiply by 100', explanation: 'A metre is bigger than a cm, and 100 cm make 1 m.' },
        ],
      },
    ],
  },
  {
    id: 'metric-lesson-2',
    topicId: 'metric',
    order: 2,
    level: '⭐⭐',
    title: 'Lesson 2 — Length, Mass & Capacity',
    summary: 'The three measuring families and their key facts.',
    sections: [
      {
        type: 'note',
        heading: 'The facts you must know',
        body:
          '<b>Length:</b> 10 mm = 1 cm · 100 cm = 1 m · 1000 m = 1 km<br>' +
          '<b>Mass:</b> 1000 g = 1 kg<br>' +
          '<b>Capacity:</b> 1000 ml = 1 litre (L)<br><br>' +
          'Mass and capacity both jump by <b>1000</b> — that one is very common in exams.',
      },
      {
        type: 'note',
        heading: 'Mass and capacity ladders',
        body: 'Same idea as length — multiply going right, divide going left.',
        diagram: { type: 'conversionChain', data: { units: ['kg', 'g'], factors: [1000] } },
      },
      {
        type: 'note',
        body: 'And for capacity:',
        diagram: { type: 'conversionChain', data: { units: ['L', 'ml'], factors: [1000] } },
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '2 kg → g: multiply by 1000 → <b>2000 g</b>',
          '5 L → ml: multiply by 1000 → <b>5000 ml</b>',
          '3000 g → kg: divide by 1000 → <b>3 kg</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Mass',
        parts: [
          { id: 'm2p1a', label: '3 kg = ___ g', type: 'number', answer: 3000, answerDisplay: '3000 g', explanation: '3 × 1000 = 3000.' },
          { id: 'm2p1b', label: '5000 g = ___ kg', type: 'number', answer: 5, answerDisplay: '5 kg', explanation: '5000 ÷ 1000 = 5.' },
          { id: 'm2p1c', label: '8 kg = ___ g', type: 'number', answer: 8000, answerDisplay: '8000 g', explanation: '8 × 1000 = 8000.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Capacity',
        parts: [
          { id: 'm2p2a', label: '4 L = ___ ml', type: 'number', answer: 4000, answerDisplay: '4000 ml', explanation: '4 × 1000 = 4000.' },
          { id: 'm2p2b', label: '2000 ml = ___ L', type: 'number', answer: 2, answerDisplay: '2 L', explanation: '2000 ÷ 1000 = 2.' },
          { id: 'm2p2c', label: '7 L = ___ ml', type: 'number', answer: 7000, answerDisplay: '7000 ml', explanation: '7 × 1000 = 7000.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Know your facts',
        parts: [
          { id: 'm2p3a', label: '1000 grams is the same as…', type: 'choice', options: ['1 kilogram', '1 tonne', '100 grams', '1 milligram'], answer: '1 kilogram', answerDisplay: '1 kilogram', explanation: '1000 g = 1 kg.' },
          { id: 'm2p3b', label: '1000 millilitres is the same as…', type: 'choice', options: ['1 litre', '1 centilitre', '10 litres', '100 ml'], answer: '1 litre', answerDisplay: '1 litre', explanation: '1000 ml = 1 litre.' },
        ],
      },
    ],
  },
  {
    id: 'metric-lesson-3',
    topicId: 'metric',
    order: 3,
    level: '⭐⭐⭐',
    title: 'Lesson 3 — Decimals & Mixed Units',
    summary: 'Half-units, decimals, and amounts written in two units.',
    sections: [
      {
        type: 'note',
        heading: 'Decimals in measurements',
        body:
          'Measurements often use decimals. The rule is exactly the same — multiply or divide.<br><br>' +
          '<b>1.5 km → m</b>: 1.5 × 1000 = <b>1500 m</b> (half of 1000 is 500).<br>' +
          '<b>1750 g → kg</b>: 1750 ÷ 1000 = <b>1.75 kg</b>.',
      },
      {
        type: 'note',
        heading: 'Mixed units — add the parts',
        body:
          'When an amount is written in two units, change the big part and add the small part.<br><br>' +
          '<b>2 m 35 cm</b> = 200 cm + 35 cm = <b>235 cm</b>.<br><br>' +
          '⚠️ <b>Watch the trap:</b> 2 m 5 cm = 200 + 5 = <b>205 cm</b>, NOT 250 cm! ' +
          'The 5 means five centimetres, not fifty.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          '2.5 m → cm: 2.5 × 100 = <b>250 cm</b>',
          '0.5 kg → g: 0.5 × 1000 = <b>500 g</b>',
          '3 kg 500 g → g: 3000 + 500 = <b>3500 g</b>',
          '250 cm → m: 250 ÷ 100 = <b>2.5 m</b>',
        ],
      },
      {
        type: 'practice',
        heading: 'Decimals → smaller unit',
        parts: [
          { id: 'm3p1a', label: '1.5 km = ___ m', type: 'number', answer: 1500, answerDisplay: '1500 m', explanation: '1.5 × 1000 = 1500.' },
          { id: 'm3p1b', label: '2.5 m = ___ cm', type: 'number', answer: 250, answerDisplay: '250 cm', explanation: '2.5 × 100 = 250.' },
          { id: 'm3p1c', label: '0.5 kg = ___ g', type: 'number', answer: 500, answerDisplay: '500 g', explanation: '0.5 × 1000 = 500.' },
          { id: 'm3p1d', label: '3.2 L = ___ ml', type: 'number', answer: 3200, answerDisplay: '3200 ml', explanation: '3.2 × 1000 = 3200.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Mixed units → one unit',
        parts: [
          { id: 'm3p2a', label: '2 m 35 cm = ___ cm', type: 'number', answer: 235, answerDisplay: '235 cm', explanation: '200 + 35 = 235.' },
          { id: 'm3p2b', label: '1 m 5 cm = ___ cm', type: 'number', answer: 105, answerDisplay: '105 cm', explanation: '100 + 5 = 105 (the trap — not 150!).' },
          { id: 'm3p2c', label: '3 kg 500 g = ___ g', type: 'number', answer: 3500, answerDisplay: '3500 g', explanation: '3000 + 500 = 3500.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Smaller unit → decimal',
        parts: [
          { id: 'm3p3a', label: '1750 m = ___ km', type: 'number', answer: 1.75, answerDisplay: '1.75 km', explanation: '1750 ÷ 1000 = 1.75.' },
          { id: 'm3p3b', label: '250 cm = ___ m', type: 'number', answer: 2.5, answerDisplay: '2.5 m', explanation: '250 ÷ 100 = 2.5.' },
          { id: 'm3p3c', label: '2300 g = ___ kg', type: 'number', answer: 2.3, answerDisplay: '2.3 kg', explanation: '2300 ÷ 1000 = 2.3.' },
        ],
      },
    ],
  },
  {
    id: 'metric-lesson-4',
    topicId: 'metric',
    order: 4,
    level: '⭐⭐⭐⭐',
    title: 'Lesson 4 — Word Problems & Comparing',
    summary: 'Same-unit first, then add, subtract or compare.',
    sections: [
      {
        type: 'note',
        heading: 'The one big tip',
        body:
          'Before you add, subtract or compare, <b>change everything into the SAME unit first</b>. ' +
          'You can\'t take 30 cm away from 1.2 m until they match — turn 1.2 m into 120 cm.',
      },
      {
        type: 'note',
        heading: 'Comparing',
        body:
          'To see which is bigger, convert both to the same unit, then compare the plain numbers.<br><br>' +
          'Is 1.5 kg or 1200 g heavier? 1.5 kg = 1500 g, and 1500 > 1200, so <b>1.5 kg</b> is heavier.',
      },
      {
        type: 'example',
        heading: 'Worked examples',
        steps: [
          'A ribbon is 1.2 m. You cut off 30 cm. Left? 120 cm − 30 cm = <b>90 cm</b>.',
          '3 bottles of 500 ml. Total? 1500 ml = <b>1.5 L</b>.',
          'A box (2 kg) holds 5 books of 350 g. Total mass? 2000 + 5×350 = 2000 + 1750 = <b>3750 g</b>.',
        ],
      },
      {
        type: 'practice',
        heading: 'Your turn',
        parts: [
          { id: 'm4p1', label: 'A string is 2 m long. You cut off 45 cm. How many cm are left?', type: 'number', answer: 155, answerDisplay: '155 cm', explanation: '2 m = 200 cm; 200 − 45 = 155.' },
          { id: 'm4p2', label: 'A bag holds 1.5 kg of flour. You use 600 g. How many g are left?', type: 'number', answer: 900, answerDisplay: '900 g', explanation: '1.5 kg = 1500 g; 1500 − 600 = 900.' },
        ],
      },
      {
        type: 'practice',
        parts: [
          { id: 'm4p3', label: 'Which is longer: 1.2 m or 130 cm?', type: 'choice', options: ['1.2 m', '130 cm'], answer: '130 cm', answerDisplay: '130 cm', explanation: '1.2 m = 120 cm, and 130 > 120.' },
          { id: 'm4p4', label: '4 cartons of juice, each 250 ml. Total in litres?', type: 'number', answer: 1, answerDisplay: '1 litre', explanation: '4 × 250 = 1000 ml = 1 L.' },
        ],
      },
      {
        type: 'practice',
        heading: 'Challenge',
        parts: [
          { id: 'm4p5', label: 'A box weighs 2 kg. Inside are 5 books, each 350 g. What is the total mass in grams?', type: 'number', answer: 3750, answerDisplay: '3750 g', explanation: '2 kg = 2000 g; 5 × 350 = 1750; 2000 + 1750 = 3750.' },
        ],
      },
    ],
  },
];
