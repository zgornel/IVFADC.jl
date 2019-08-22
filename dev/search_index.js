var documenterSearchIndex = {"docs":
[{"location":"api/#","page":"API Reference","title":"API Reference","text":"","category":"page"},{"location":"api/#","page":"API Reference","title":"API Reference","text":"Modules = [IVFADC]","category":"page"},{"location":"api/#IVFADC.IVFADCIndex","page":"API Reference","title":"IVFADC.IVFADCIndex","text":"IVFADCIndex{U<:Unsigned, I<:Unsigned, Dc<:Distances.PreMetric, Dr<:Distances.PreMetric, T<:AbstractFloat, Q<:AbstractCoarseQuantizer{Dc,T}}\n\nThe inverse file system object. It allows for approximate nearest neighbor search into the contained vectors.\n\nFields\n\ncoarse_quantizer::AbstractCoarseQuantizer{Dc,T} contains the coarse vectors\nresidual_quantizer::QuantizedArrays.OrthogonalQuantizer{U,Dr,T,2}\n\nis employed to quantize vectors when adding to the index\n\ninverse_index::InvertedIndex{I,U} is the actual inverse index employed\n\nto perform the search.\n\n\n\n\n\n","category":"type"},{"location":"api/#IVFADC.IVFADCIndex-Union{Tuple{Array{T,2}}, Tuple{T}, Tuple{I}} where T<:AbstractFloat where I<:Unsigned","page":"API Reference","title":"IVFADC.IVFADCIndex","text":"IVFADCIndex(data [;kwargs])\n\nMain constructor for building an inverse file system for billion-scale ANN search.\n\nArguments\n\nMatrix{T<:AbstractFloat} input data\n\nKeyword arguments\n\nkc::Int=DEFAULT_COARSE_K number of clusters (Voronoi cells) to employ\n\nin the coarse quantization step\n\nk::Int=DEFAULT_QUANTIZATION_K number of residual quantization levels to use\nm::Int=DEFAULT_QUANTIZATION_M number of residual quantizers to use\ncoarse_quantizer::Symbol=DEFAULT_COARSE_QUANTIZER coarse quantizer\ncoarse_distance=DEFAULT_COARSE_DISTANCE coarse quantization distance\nquantization_distance=DEFAULT_QUANTIZATION_DISTANCE residual quantization distance\nquantization_method=DEFAULT_QUANTIZATION_METHOD residual quantization method\ncoarse_maxiter=DEFAULT_COARSE_MAXITER number of clustering iterations for obtaining\n\nthe coarse vectors\n\nquantization_maxiter=DEFAULT_QUANTIZATION_MAXITER number of clustering iterations for\n\nresidual quantization\n\nindex_type=UInt32 type for the indexes of the vectors in the inverted list\n\n\n\n\n\n","category":"method"},{"location":"api/#HNSW.knn_search-Union{Tuple{T}, Tuple{Dr}, Tuple{Dc}, Tuple{I}, Tuple{U}, Tuple{IVFADCIndex{U,I,Dc,Dr,T,Q} where Q<:AbstractCoarseQuantizer{Dc,T},Array{T,1},Int64}} where T where Dr where Dc where I where U","page":"API Reference","title":"HNSW.knn_search","text":"knn_search(ivfadc, point, k[; w=1])\n\nSearches at most k closest neighbors of point in the index ivfadc; the neighbors will be searched for in the points contained in the closest w clusters.\n\n\n\n\n\n","category":"method"},{"location":"api/#IVFADC.delete_from_index!-Union{Tuple{Q}, Tuple{T}, Tuple{Dr}, Tuple{Dc}, Tuple{I}, Tuple{U}, Tuple{IVFADCIndex{U,I,Dc,Dr,T,Q},Array{#s83,1} where #s83<:Integer}} where Q where T where Dr where Dc where I where U","page":"API Reference","title":"IVFADC.delete_from_index!","text":"delete_from_index!(ivfadc, points)\n\nDeletes the points with indices contained in points from the index ivfadc.\n\n\n\n\n\n","category":"method"},{"location":"api/#IVFADC.AbstractCoarseQuantizer","page":"API Reference","title":"IVFADC.AbstractCoarseQuantizer","text":"Abstract coarse quantizer type. The coarse quantizer is ment to assign a point to a given number of Voronoi cells in which its neighbors will be searched.\n\n\n\n\n\n","category":"type"},{"location":"api/#IVFADC.HNSWQuantizer","page":"API Reference","title":"IVFADC.HNSWQuantizer","text":"HNSWQuantizer{U<:Unsigned, V<:Vector{Vector{T}}, D<:Distances.PreMetric, T<:AbstractFloat}\n\nCoarse quantization structure based on HNSW search structure. The hnsw field contains the coarse vectors.\n\n\n\n\n\n","category":"type"},{"location":"api/#IVFADC.InvertedIndex","page":"API Reference","title":"IVFADC.InvertedIndex","text":"Simple alias for Vector{InvertedList{I<:Unsigned, U<:Unsigned}}.\n\n\n\n\n\n","category":"type"},{"location":"api/#IVFADC.InvertedList","page":"API Reference","title":"IVFADC.InvertedList","text":"InvertedList{I<:Unsigned, U<:Unsigned}\n\nBasic structure which corresponds to the points found within a Voronoi cell. The fields idxs contains the indices of the points while codes contains quantized vector data.\n\n\n\n\n\n","category":"type"},{"location":"api/#IVFADC.NaiveQuantizer","page":"API Reference","title":"IVFADC.NaiveQuantizer","text":"NaiveQuantizer{D<:Distances.PreMetric, T<:AbstractFloat}\n\nCoarse quantization structure based on brute force search. The vector fields contains the coarse vectors while distance contains the distance that is used to calculate the distance from a point to the coarse vectors.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.length-Tuple{IVFADCIndex}","page":"API Reference","title":"Base.length","text":"length(ivfadc::IVFADCIndex)\n\nReturns the number of vectors indexed by ivfadc.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.pop!-Tuple{Any}","page":"API Reference","title":"Base.pop!","text":"pop!(ivfadc)\n\nPops from the index ivfadc the point with the highest index and returns it updating the index as well.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.popfirst!-Tuple{Any}","page":"API Reference","title":"Base.popfirst!","text":"popfirst!(ivfadc)\n\nPops from the index ivfadc the first point and returns it updating the index as well.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.push!-Tuple{Any,Any}","page":"API Reference","title":"Base.push!","text":"push!(ivfadc, point)\n\nPushes point to the end of index ivfadc; the point is assigned to a cluster and its quantized code added to the inverted list corresponding to the cluster.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.pushfirst!-Tuple{Any,Any}","page":"API Reference","title":"Base.pushfirst!","text":"pushfirst!(ivfadc, point)\n\nPushes point to the beginning of index ivfadc; the point is assigned to a cluster and its quantized code added to the inverted list corresponding to the cluster.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.size-Tuple{IVFADCIndex}","page":"API Reference","title":"Base.size","text":"size(ivfadc::IVFADCIndex)\n\nReturns a tuple with the dimensionality and number of the vectors indexed by ivfadc.\n\n\n\n\n\n","category":"method"},{"location":"examples/#Usage-examples-1","page":"Usage examples","title":"Usage examples","text":"","category":"section"},{"location":"examples/#Building-an-IVFADC-index-1","page":"Usage examples","title":"Building an IVFADC index","text":"","category":"section"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"Building an index can be performed using an outer constructor","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"using IVFADC\ndata = rand(10, 100);  # 100 points, 10 dimensions\n\nivfadc = IVFADCIndex(data, kc=5, k=8, m=2)","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"The coarse quantizer, used in the first level coarse neighbor search, can be specified using the coarse_quantizer keyword argument","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"ivfadc = IVFADCIndex(data, kc=5, k=8, m=2, coarse_quantizer=:hnsw)  # fast!\nivfadc = IVFADCIndex(data, kc=5, k=8, m=2, coarse_quantizer=:naive) # simple","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"The HNSW coarse quantizer is recommended is 'many' clusters are being used and coarse search dominates search time as opposed to in-cluster search. ","category":"page"},{"location":"examples/#Searching-the-index-1","page":"Usage examples","title":"Searching the index","text":"","category":"section"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"Searching into the index is done with knn_search for multiple queries","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"points = [rand(10) for _ in 1:3];\nidxs, dists = knn_search(ivfadc, points, 5)","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"as well as single queries","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"point = data[:, 55];\nidxs, dists = knn_search(ivfadc, point, 5)","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"Internally, the IVFADC index uses 0-based indexing; to retrieve the actual 1-based neighbor indexes that correspond to indexes in data, a simple transform has to be performed:","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"int_idxs = Int.(idxs) .+ 1","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"Results may vary depending on how many clusters are being used to search into, option configurable through the keyword argument w of knn_search","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"knn_search(ivfadc, point, 5, w=10)  # search into 10 clusters","category":"page"},{"location":"examples/#Updating-the-index-1","page":"Usage examples","title":"Updating the index","text":"","category":"section"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"Adding and removing points to and from the index is done with push!, pop!, pushfirst! and popfirst! methods. As they imply, point can be added (and quantized) or removed (and reconstructed) at the beginning or end of the index. In practice, this implies updating the point indexes in the index, if the case.","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"for i in 1:5\n    push!(ivfadc, rand(10))\nend\nivfadc\npop!(ivfadc)\npushfirst!(ivfadc, 0.1*collect(1:10))\npopfirst!(ivfadc)","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"note: Note\nWhen adding a new point, its index will always be the number of already existing points. When deleting points, the indexes of all points are updated so that they are consecutive.","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"The function delete_from_index! removes the points indicated in the vector of indexes.","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"delete_from_index!(ivfadc, [10, 21, 32]);\nivfadc","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"note: Note\nDeleting from the index is a slow operation as the all indexes of the points contained need to be properly updated depending on the positions of the points that are being deleted.","category":"page"},{"location":"examples/#Limits-and-advanced-usage-of-the-index-1","page":"Usage examples","title":"Limits and advanced usage of the index","text":"","category":"section"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"It is not possible to add more points than the maximum value of the indexing type","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"ivfadc = IVFADCIndex(rand(2,256), kc=2, k=16, m=1, index_type=UInt8)","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"Adding a new point to an index that already has 256 points (which is the maximum for the UInt8) throws an error","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"push!(ivfadc, rand(2))","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"It is however possible to add the point after deleting another one","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"popfirst!(ivfadc)\npush!(ivfadc, rand(2))\nivfadc","category":"page"},{"location":"examples/#","page":"Usage examples","title":"Usage examples","text":"In the example above, the index is being used as a FIFO buffer where the first point is removed and a new one is appended to the buffer.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"CurrentModule=IVFADC","category":"page"},{"location":"#Introduction-1","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"IVFADC implements an inverted file system with asymmetric distance computation for fast approximate nearest neighbor search in large i.e. billion-scale, high dimensional datasets.","category":"page"},{"location":"#Implemented-features-1","page":"Introduction","title":"Implemented features","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"indexing: support for naive (brute search) and HNSW coarse quantizers\nadding points to the index: push!, pushfirst!\nremoving points from the index: pop!, popfirst!, delete_from_index!\nsearching into the index: knn_search\nsaving/loading the index to/from disk: save_ivfadc_index, load_ivfadc_index","category":"page"},{"location":"#Installation-1","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Installation can be performed from either inside or outside Julia.","category":"page"},{"location":"#Git-cloning-1","page":"Introduction","title":"Git cloning","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"$ git clone https://github.com/zgornel/IVFADC.jl","category":"page"},{"location":"#Julia-REPL-1","page":"Introduction","title":"Julia REPL","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"The package can be installed from inside Julia with:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"using Pkg\nPkg.add(\"IVFADC\")","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"or","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Pkg.add(PackageSpec(url=\"https://github.com/zgornel/IVFADC.jl\", rev=\"master\"))","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"for the latest master branch.","category":"page"},{"location":"#References-1","page":"Introduction","title":"References","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Jègou et al. \"Product quantization for nearest neighbor search\", IEEE TPAMI, 2011\nBaranchuk et al. \"Revisiting the inverted indices for billion-scale approximate nearest neighbors, ECCV, 2018\"","category":"page"}]
}
