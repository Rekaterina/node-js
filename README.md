## Caesar cipher Command line interface (CLI) tool
Encoding and decoding a text by Caesar cipher.

### Installing

```
git clone {repository URL}
git checkout task1 -> go to branch task1
npm install
cd task1 -> go to folder task1
```
### Options

1.  **-s, - -shift**: a shift size
2.  **-i, - -input**: an input file
3.  **-o, - -output**: an output file
4.  **-a, - -action**: an action encode/decode

Action (encode/decode) and the shift are required.

### Usage examples

**Running on command line**

Encoding a string entered on the command line with a `shift` of 7:

```bash
$ node index -a encode -s 7
```

Encoding a `input.txt` file with a `shift` of 7 and saving the result to a `output.txt` file:

```bash
$ node index -a encode -s 7 -i input.txt -o output.txt
```

 input.txt
 `This is secret. Message about "_" symbol!`

 output.txt
 `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`