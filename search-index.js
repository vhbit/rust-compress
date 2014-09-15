var searchIndex = {};
searchIndex['compress'] = {"items":[[0,"","compress","dox (placeholder)"],[0,"checksum","","Checksum algorithms"],[0,"adler","compress::checksum","Adler-32 checksum"],[1,"State32","compress::checksum::adler","Adler state for 32 bits"],[10,"new","","Create a new state",0],[10,"feed","","Mutate the state for given data",0],[10,"result","","Get checksum",0],[10,"reset","","Reset the state",0],[0,"bwt","compress","BWT (Burrows-Wheeler Transform) forward and backward transformation"],[1,"Radix","compress::bwt","Radix sorting primitive"],[11,"freq","","number of occurancies (frequency) per symbox",1],[1,"TransformIterator","","An iterator over BWT output"],[1,"InverseIterator","","An iterator over inverse BWT\nRun time: O(N), memory: N words (table)"],[1,"Decoder","","This structure is used to decode a stream of BWT blocks. This wraps an\ninternal reader which is read from when this decoder's read method is\ncalled."],[11,"r","","The internally wrapped reader. This is exposed so it may be moved out\nof. Note that if data is read from the reader while decoding is in\nprogress the output stream will get corrupted.",2],[1,"Encoder","","This structure is used to compress a stream of bytes using the BWT.\nThis is a wrapper around an internal writer which bytes will be written to."],[3,"compute_suffixes","","Compute a suffix array from a given input string\nResulting suffixes are guaranteed to be alphabetically sorted\nRun time: O(N^3), memory: N words (suf_array) + ALPHABET_SIZE words (Radix)"],[3,"encode","","Encode BWT of a given input, using the 'suf_array'"],[3,"encode_simple","","Transform an input block into the output slice, all-inclusive version.\nReturns the index of the original string in the output matrix."],[3,"compute_inversion_table","","Compute an inversion jump table, needed for BWT decoding"],[3,"decode","","Decode a BWT block, given it's origin, and using 'table' temporarily"],[3,"decode_simple","","A simplified BWT decode function, which allocates a temporary suffix array"],[0,"dc","","DC (Distance Coding) forward and backward transformation.\nDesigned to be used on BWT block output for compression."],[1,"Context","compress::bwt::dc","Distance coding context\nHas all the information potentially needed by the underlying coding model"],[11,"symbol","","current symbol",3],[11,"last_rank","","last known MTF rank",3],[11,"distance_limit","","maximum possible distance",3],[1,"EncodeIterator","","DC body iterator, can be used to encode distances"],[3,"encode","","Encode a block of bytes 'input'\nwrite output distance stream into 'distances'\nreturn: unique bytes encountered in the order they appear\nwith the corresponding initial distances"],[3,"encode_simple","","Encode version with \"batteries included\" for quick testing"],[3,"decode","","Decode a block of distances given the initial symbol positions"],[3,"decode_simple","","Decode version with \"batteries included\" for quick testing"],[4,"Symbol","",""],[4,"Rank","",""],[5,"TotalSymbols","",""],[10,"fmt","","",3],[10,"eq","","",3],[10,"ne","","",3],[10,"new","","create a new distance context",3],[10,"new","","create a new encode iterator",4],[10,"get_init","","get the initial symbol positions, to be called before iteration",4],[10,"next","","",4],[0,"mtf","compress::bwt","MTF (Move To Front) encoder/decoder\nProduces a rank for each input character based on when it was seen last time.\nUseful for BWT output encoding, which produces a lot of zeroes and low ranks."],[1,"MTF","compress::bwt::mtf","MoveToFront encoder/decoder"],[11,"symbols","","rank-ordered list of unique Symbols",5],[1,"Encoder","","A simple MTF stream encoder"],[1,"Decoder","","A simple MTF stream decoder"],[4,"Symbol","",""],[4,"Rank","",""],[5,"TOTAL_SYMBOLS","",""],[10,"new","","create a new zeroed MTF",5],[10,"reset_alphabetical","","set the order of symbols to be alphabetical",5],[10,"encode","","encode a symbol into its rank",5],[10,"decode","","decode a rank into its symbol",5],[10,"new","","start encoding into the given writer",6],[10,"finish","","finish encoding and return the wrapped writer",6],[10,"write","","",6],[10,"flush","","",6],[10,"new","","start decoding the given reader",7],[10,"finish","","finish decoder and return the wrapped reader",7],[10,"read","","",7],[4,"Symbol","compress::bwt","A base element for the transformation"],[5,"ALPHABET_SIZE","",""],[10,"new","","create Radix sort instance",1],[10,"reset","","reset counters\nallows the struct to be re-used",1],[10,"gather","","count elements in the input",1],[10,"accumulate","","build offset table",1],[10,"place","","return next byte position, advance it internally",1],[10,"shift","","shift frequences to the left\nallows the offsets to be re-used after all positions are obtained",1],[10,"new","","create a new BWT iterator from the suffix array",8],[10,"get_origin","","return the index of the original string",8],[10,"next","","",8],[10,"new","","create a new inverse BWT iterator with a given input, origin, and a jump table",9],[10,"next","","",9],[10,"new","","Creates a new decoder which will read data from the given stream. The\ninner stream can be re-acquired by moving out of the `r` field of this\nstructure.\n'extra_mem' switch allows allocating extra N words of memory for better performance",2],[10,"reset","","Resets this decoder back to its initial state. Note that the underlying\nstream is not seeked on or has any alterations performed on it.",2],[10,"read","","",2],[10,"new","","Creates a new encoder which will have its output written to the given\noutput stream. The output stream can be re-acquired by calling\n`finish()`\n'block_size' is idealy as big as your input, unless you know for sure that\nthe input consists of multiple parts of different nature. Often set as 4Mb.",10],[10,"finish","","This function is used to flag that this session of compression is done\nwith. The stream is finished up (final bytes are written), and then the\nwrapped writer is returned.",10],[10,"write","","",10],[10,"flush","","",10],[0,"flate","compress","DEFLATE Compression and Decompression"],[1,"Decoder","compress::flate","The structure that is used to decode an LZ4 data stream. This wraps an\ninternal reader which is used as the source of all data."],[11,"r","","Wrapped reader which is exposed to allow getting it back.",11],[10,"new","","Creates a new flate decoder which will read data from the specified\nsource",11],[10,"eof","","Returns whether this deflate stream has reached the EOF marker",11],[10,"reset","","Resets this flate decoder. Note that this could corrupt an in-progress\ndecoding of a stream.",11],[10,"read","","",11],[0,"lz4","compress","LZ4 Decompression and Compression"],[1,"Decoder","compress::lz4","This structure is used to decode a stream of LZ4 blocks. This wraps an\ninternal reader which is read from when this decoder's read method is\ncalled."],[11,"r","","The internally wrapped reader. This is exposed so it may be moved out\nof. Note that if data is read from the reader while decoding is in\nprogress the output stream will get corrupted.",12],[1,"Encoder","","This structure is used to compress a stream of bytes using the LZ4\ncompression algorithm. This is a wrapper around an internal writer which\nbytes will be written to."],[10,"new","","Creates a new decoder which will read data from the given stream. The\ninner stream can be re-acquired by moving out of the `r` field of this\nstructure.",12],[10,"reset","","Resets this decoder back to its initial state. Note that the underlying\nstream is not seeked on or has any alterations performed on it.",12],[10,"eof","","Tests whether the end of this LZ4 stream has been reached",12],[10,"read","","",12],[10,"new","","Creates a new encoder which will have its output written to the given\noutput stream. The output stream can be re-acquired by calling\n`finish()`",13],[10,"finish","","This function is used to flag that this session of compression is done\nwith. The stream is finished up (final bytes are written), and then the\nwrapped writer is returned.",13],[10,"write","","",13],[10,"flush","","",13],[0,"zlib","compress","ZLIB Compression and Decompression"],[1,"Decoder","compress::zlib","Structure used to decode a ZLIB-encoded stream. The wrapped stream can be\nre-acquired through the unwrap() method."],[10,"new","","Creates a new ZLIB-stream decoder which will wrap the specified reader.\nThis decoder also implements the `Reader` trait, and the underlying\nreader can be re-acquired through the `unwrap` method.",14],[10,"unwrap","","Destroys this decoder, returning the underlying reader.",14],[10,"eof","","Tests if this stream has reached the EOF point yet.",14],[10,"read","","",14],[0,"entropy","compress","Entropy coder family"],[0,"ari","compress::entropy","Arithmetic encoder/decoder using the Range encoder underneath.\nCan be used in a general case of entropy coding stage. Supposed to be fast."],[1,"RangeEncoder","compress::entropy::ari","Range Encoder basic primitive\nGets probability ranges on the input, produces whole bytes of code on the output,\nwhere the code is an arbitrary fixed-ppoint value inside the resulting probability range."],[11,"threshold","","The minimum distance between low and hai to keep at all times,\nhas to be at least the largest incoming 'total',\nand optimally many times larger",15],[1,"Encoder","","An arithmetic encoder helper"],[1,"Decoder","","An arithmetic decoder helper"],[0,"apm","","Adaptive Probability Models"],[1,"Bit","compress::entropy::ari::apm","Bit probability model"],[1,"Gate","","Binary context gate\nmaps an input binary probability into a new one\nby interpolating between internal maps in non-linear space"],[4,"FlatProbability","",""],[4,"WideProbability","",""],[4,"BinCoords","",""],[10,"new_equal","","Return an equal 0-1 probability",16],[10,"to_flat","","Return flat probability",16],[10,"to_wide","","Return wide probability",16],[10,"from_flat","","Construct from flat probability",16],[10,"from_wide","","Construct from wide probability",16],[10,"update_zero","","Mutate for better zeroes",16],[10,"update_one","","Mutate for better ones",16],[10,"update","","Mutate for a given value",16],[10,"get_range","","",16],[10,"find_value","","",16],[10,"get_denominator","","",16],[10,"new","","Create a new gate instance",17],[10,"pass","","Pass a bit through the gate",17],[10,"pass_wide","","Pass a wide probability on input, usable when\nyou mix it linearly beforehand (libbsc does that)",17],[10,"update_zero","","Mutate for better zeroes",17],[10,"update_one","","Mutate for better ones",17],[10,"update","","Mutate for a given value",17],[0,"bin","compress::entropy::ari","Binary models for the arithmetic coder.\nThe simplicity of the domain allows for normalized updates in place using bit shifts."],[1,"Model","compress::entropy::ari::bin","A binary value frequency model"],[11,"rate","","learning rate",18],[1,"SumProxy","","A proxy model for the combination of two binary models\nusing equation: (wa * A + wb * B) >> ws"],[10,"new_flat","","Create a new flat (50/50 probability) instance",18],[10,"new_custom","","Create a new instance with a given percentage for zeroes",18],[10,"reset_flat","","Reset the model to 50/50 distribution",18],[10,"get_probability_zero","","Return the probability of 0",18],[10,"get_probability_one","","Return the probability of 1",18],[10,"update_zero","","Update the frequency of zero",18],[10,"update_one","","Update the frequency of one",18],[10,"update","","Update frequencies in favor of given 'value'\nLower factors produce more aggressive updates",18],[10,"get_range","","",18],[10,"find_value","","",18],[10,"get_denominator","","",18],[10,"new","","Create a new instance of the binary sum proxy",19],[10,"get_range","","",19],[10,"find_value","","",19],[10,"get_denominator","","",19],[0,"table","compress::entropy::ari","Frequency table models for the arithmetic coder.\nThe module also implements Reader/Writer using simple byte coding."],[1,"Model","compress::entropy::ari::table","A simple table of frequencies."],[1,"SumProxy","","A proxy model for the sum of two frequency tables\nusing equation: (wa * A + wb * B) >> ws"],[1,"ByteEncoder","","A basic byte-encoding arithmetic\nuses a special terminator code to end the stream"],[11,"encoder","","A lower level encoder",20],[11,"freq","","A basic frequency table",20],[1,"ByteDecoder","","A basic byte-decoding arithmetic\nexpects a special terminator code for the end of the stream"],[11,"decoder","","A lower level decoder",21],[11,"freq","","A basic frequency table",21],[4,"Frequency","",""],[10,"new_custom","","Create a new table with frequencies initialized by a function",22],[10,"new_flat","","Create a new tanle with all frequencies being equal",22],[10,"reset_flat","","Reset the table to the flat state",22],[10,"update","","Adapt the table in favor of given 'value'\nusing 'add_log' and 'add_const' to produce the additive factor\nthe higher 'add_log' is, the more concervative is the adaptation",22],[10,"downscale","","Reduce frequencies by 'cut_iter' bits",22],[10,"get_frequencies","","Return read-only frequencies slice",22],[10,"get_range","","",22],[10,"find_value","","",22],[10,"get_denominator","","",22],[10,"new","","Create a new instance of the table sum proxy",23],[10,"get_range","","",23],[10,"find_value","","",23],[10,"get_denominator","","",23],[10,"new","","Create a new encoder on top of a given Writer",20],[10,"finish","","Finish encoding & write the terminator symbol",20],[10,"write","","",20],[10,"flush","","",20],[10,"new","","Create a decoder on top of a given Reader",21],[10,"finish","","Finish decoding",21],[10,"read","","",21],[4,"Symbol","compress::entropy::ari",""],[4,"Border","",""],[5,"RANGE_DEFAULT_THRESHOLD","",""],[6,"Model","","An abstract model to produce probability ranges\nCan be a table, a mix of tables, or just a smart function."],[9,"get_range","","Get the probability range of a value",24],[9,"find_value","","Find the value by a given probability offset, return with the range",24],[9,"get_denominator","","Get the sum of all probabilities",24],[10,"encode","","Encode a value using a range encoder\nreturn the number of symbols written",24],[10,"decode","","Decode a value using given 'code' on the range encoder\nreturn a (value, num_symbols_to_shift) pair",24],[10,"new","","Create a new instance\nwill keep the active range below 'max_range'",15],[10,"reset","","Reset the current range",15],[10,"process","","Process a given interval [from/total,to/total) into the current range\nwrite into the output slice, and return the number of symbols produced",15],[10,"query","","Query the value encoded by 'code' in range [0,total)",15],[10,"get_code_tail","","Get the code tail and close the range\nused at the end of encoding",15],[10,"new","","Create a new encoder on top of a given Writer",25],[10,"encode","","Encode an abstract value under the given Model",25],[10,"finish","","Finish encoding by writing the code tail word",25],[10,"flush","","Flush the output stream",25],[10,"new","","Create a decoder on top of a given Reader",26],[10,"decode","","Decode an abstract value based on the given Model",26],[10,"finish","","Finish decoding",26]],"paths":[[1,"State32"],[1,"Radix"],[1,"Decoder"],[1,"Context"],[1,"EncodeIterator"],[1,"MTF"],[1,"Encoder"],[1,"Decoder"],[1,"TransformIterator"],[1,"InverseIterator"],[1,"Encoder"],[1,"Decoder"],[1,"Decoder"],[1,"Encoder"],[1,"Decoder"],[1,"RangeEncoder"],[1,"Bit"],[1,"Gate"],[1,"Model"],[1,"SumProxy"],[1,"ByteEncoder"],[1,"ByteDecoder"],[1,"Model"],[1,"SumProxy"],[6,"Model"],[1,"Encoder"],[1,"Decoder"]]};
initSearch(searchIndex);
