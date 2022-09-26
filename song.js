samples({
  "moog": {
    'g2': 'moog/004_Mighty%20Moog%20G2.wav',
    'g3': 'moog/005_Mighty%20Moog%20G3.wav',
  }}, 'github:tidalcycles/Dirt-Samples/master/');
note(
  `<
    [g2 [g2 g3] ~]!3
    [a2 [a2 a3] ~]!4
    [g2 [g2 g3] ~]!2
    [c2 [c2 c3] ~]!2
  >`)
  .s('moog')
  .crush(9)
  .someCyclesBy(0.3, x=>x.crush(5))
  .clip(1)
  .gain(1).out()
