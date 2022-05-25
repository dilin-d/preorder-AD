
var nameArray = ["Daddy Rewind", "Gotham Black", "Gotham"];

var dataArray = ["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A54AAQAAAAAAAAAAAAAAAAAAAAwA9QAAAPUAAAHb/8YBjv+4AdD/yAI//7sBef/PAu4AFQJaAAoCgwALAlgACwKOAAMAAAABAAAALAABAAUAGAACAAYAAgADADUABAAF/9oABgAEACMACgAKADIACgALACQAAQAAAAwAmAADAAAAAAABAAAAAAAKAAACAAFzAAAAAAAAABkBMgABAAAAAAAAAEgAAAABAAAAAAABAAwASAABAAAAAAACAAwAVAABAAAAAAADACAAYAABAAAAAAAEAAwAgAABAAAAAAAFAA0AjAABAAAAAAAGAAsAmQABAAAAAAAIAA0ApAABAAAAAAAJAA0AsQABAAAAAAAKAEgAvgABAAAAAAAQAAwBBgABAAAAAAARAAwBEgABAAAAAAASAAwBHgADAAEECQAAAJABKgADAAEECQABABgBugADAAEECQACAA4B0gADAAEECQADAEAB4AADAAEECQAEABgCIAADAAEECQAFABoCOAADAAEECQAGABYCUgADAAEECQAIABoCaAADAAEECQAJABoCggADAAEECQAKAJACnAADAAEECQAQABgDLAADAAEECQARABgDRENvcHlyaWdodCAoYykgMjAxOSBieSBzdGFyaW5rYnJ1c2ggLSBGZW5ueSBXaXJ5YW5pLiBBbGwgcmlnaHRzIHJlc2VydmVkLkRhZGR5IFJld2luZERhZGR5IFJld2luZEZlbm55V2lyeWFuaTogRGFkZHkgUmV3aW5kOiAyMDE5RGFkZHkgUmV3aW5kVmVyc2lvbiAxLjAwMERhZGR5UmV3aW5kRmVubnkgV2lyeWFuaUZlbm55IFdpcnlhbmlDb3B5cmlnaHQgKGMpIDIwMTkgYnkgc3Rhcmlua2JydXNoIC0gRmVubnkgV2lyeWFuaS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5EYWRkeSBSZXdpbmREYWRkeSBSZXdpbmREYWRkeSBSZXdpbmQAQwBvAHAAeQByAGkAZwBoAHQAIAAoAGMAKQAgADIAMAAxADkAIABiAHkAIABzAHQAYQByAGkAbgBrAGIAcgB1AHMAaAAgAC0AIABGAGUAbgBuAHkAIABXAGkAcgB5AGEAbgBpAC4AIABBAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ARABhAGQAZAB5ACAAUgBlAHcAaQBuAGQAUgBlAGcAdQBsAGEAcgBGAGUAbgBuAHkAVwBpAHIAeQBhAG4AaQA6ACAARABhAGQAZAB5ACAAUgBlAHcAaQBuAGQAOgAgADIAMAAxADkARABhAGQAZAB5ACAAUgBlAHcAaQBuAGQAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAMABEAGEAZABkAHkAUgBlAHcAaQBuAGQARgBlAG4AbgB5ACAAVwBpAHIAeQBhAG4AaQBGAGUAbgBuAHkAIABXAGkAcgB5AGEAbgBpAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQA5ACAAYgB5ACAAcwB0AGEAcgBpAG4AawBiAHIAdQBzAGgAIAAtACAARgBlAG4AbgB5ACAAVwBpAHIAeQBhAG4AaQAuACAAQQBsAGwAIAByAGkAZwBoAHQAcwAgAHIAZQBzAGUAcgB2AGUAZAAuAEQAYQBkAGQAeQAgAFIAZQB3AGkAbgBkAEQAYQBkAGQAeQAgAFIAZQB3AGkAbgBkAAAAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAA==", "T1RUTwAKAIAAAwAgQ0ZGIM6YuX8AAACsAAADl0dQT1PWyOduAAAERAAAAUJPUy8yE1U41wAABYgAAABgY21hcAKJAn8AAAXoAAAAhGhlYWRdAOpCAAAGbAAAADZoaGVhCEoEOAAABqQAAAAkaG10eB8MARoAAAbIAAAANG1heHAADVAAAAAG/AAAAAZuYW1lqNdtUAAABwQAAALocG9zdP9+ABQAAAnsAAAAIAEABAIAAQEBDUdvdGhhbS1CbGFjawABAQEy+Bv4HIsMHvgdAfgXBPgeDBVC+0EcBOz6OAUdAE3Shg2YDCL3aQ/3dRH3bQwl+ekMJAAFAQEGDlx0gEFkb2JlSWRlbnRpdHlIVEYgR290aGFtqiBDb3ByLiAyMDAzIFRoZSBIb2VmbGVyIFR5cGUgRm91bmRyeSwgSW5jLiBJbmZvOiB3d3cudHlwb2dyYXBoeS5jb20vT3JpZ0ZvbnRUeXBlIC9UeXBlMSBkZWZHb3RoYW0tQmxhY2sAAAEAAQsDAAEAAAAADQANAgABAAQABQATADsAcQC4AMwA7wFUAZwB4gIZAlb7Yg4O+76z93kV99z3O/vcBg7kkRb3YAa99xEF96IGvvsRBfdkBvu++VUF+08GmPxBFdr3W9n7WwUOxskW954G95D3J/cq914gCvde+yX3JPuOHvuiBvdW/KQV9/jaB/cI2Er7BB+JB/sFPkv7CB4O9xH4Mn0V92z3Nvc3910gCvdd+zT3Nfts+2z7Nvs3+10eiQf7Xfc0+zX3bB6N90MVIULj8CAK8NLh9fbUMyYeiQcmRDUgHg5d930W91b4pvdm9z78+vs+92YGDpz3nBb3V/edBvee+EcF+20G+yX7k/sk95MF+3EG9578SgUOIPdifxXSvqa0sB9T91D3ywfXesNisx62YEmiKhsuSnpyTh+y+xoFnru3lsQb1K5rUx+CB5ZsWpVZG/sTNlH7BB+JB/sA2lDyHs/3CxVkb6GwIAqzq6bCp6aFg54ecgdVZGhUHg5t96J/Fdy6sriwH0P3Uvlu+1L7kwe0Z1uwORv7FPsCIPtEH4kH+0H3AyD3FB7F9zMVTlm+0yAK0729yMi8WEQeiQdDWlhOHg5Z99t+FfdC9xL3FfcuIAr3LvsR9xP7QftC+xL7FfsuHokH+y73EfsT90Eejfc1FUhbw80gCsy3wtDOu1NJ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"];

var fontStretch = ["", "", ""];

var fontWeight = ["normal", "500", "bold"];

var fontStyleSubArray0 = ["normal"];

var fontStyleSubArray1 = ["normal"];

var fontStyleSubArray2 = ["normal"];

var fontStyle = [fontStyleSubArray0, fontStyleSubArray1, fontStyleSubArray2];

function buildFontRule(fontFamily, fontData, fontStyle, fontWeight, fontStretch)
{
	if(fontStyle)
	{
	returnValue = "@font-face { font-family:\"" + fontFamily + "\"; font-style:" + fontStyle + ";";
	if(fontWeight)
	{
		returnValue += "font-weight:" + fontWeight + ";";
	}
	if(fontStretch)
	{
		returnValue += "font-stretch:" + fontStretch + ";";
	}

	returnValue += "src:url(\"data:font/opentype;base64," + fontData + "\"); }";
	return returnValue;
	}
	else 
	{
	return "";
	}
}

for (var i in dataArray)
{
for (var j in fontStyle[i])
	{
		document.write("<style>" + buildFontRule(nameArray[i], dataArray[i], fontStyle[i][j], fontWeight[i], fontStretch[i]) + "</style>");
	}
}
